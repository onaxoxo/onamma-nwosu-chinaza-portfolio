// Fresh Figma exports of the hero-strip cards carry an opaque grey canvas in
// the rounded corners. Punch those corners out; leave the artwork untouched.
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const dir = path.join(__dirname, '..', 'src', 'assets', 'landing', 'strip')

async function round(name) {
  const file = path.join(dir, name)
  const { width, height } = await sharp(file).metadata()
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="84" ry="84" fill="#fff"/></svg>`,
  )
  await sharp(file)
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(file + '.tmp')
  fs.renameSync(file + '.tmp', file)
  console.log(name, 'rounded')
}

;(async () => {
  for (let i = 1; i <= 8; i++) await round(`card-${i}.png`)
})()
