// Re-tints the hero strip exports: the heart pattern band becomes pure white
// (Figma exports it as an off-white texture) and the corners outside the
// 42px radius become transparent. Inner artwork is left untouched.
const sharp = require('sharp')
const path = require('path')

const dir = path.join(__dirname, '..', 'src', 'assets', 'landing', 'strip')
const W = 1088, H = 860, R = 84 // 2x export of a 544x430 card, radius 42
// Inner artwork sits roughly at x 24..502, y 18..391 (1x) across the eight cards.
const inner = { x0: 44, y0: 34, x1: 1006, y1: 784 }

async function clean(name) {
  const file = path.join(dir, name)
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * 4
      const outsideInner = x < inner.x0 || x > inner.x1 || y < inner.y0 || y > inner.y1
      if (outsideInner && data[i] >= 232 && data[i + 1] >= 232 && data[i + 2] >= 232) {
        data[i] = data[i + 1] = data[i + 2] = 255
      }
    }
  }
  const mask = Buffer.from(
    `<svg width="${W}" height="${H}"><rect width="${W}" height="${H}" rx="${R}" ry="${R}" fill="#fff"/></svg>`,
  )
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(file + '.tmp')
  require('fs').renameSync(file + '.tmp', file)
  console.log('cleaned', name)
}

;(async () => {
  for (let i = 1; i <= 8; i++) await clean(`card-${i}.png`)
})()
