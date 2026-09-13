// Cards 4 (Ocicat) and 5 (CVER) carry a grey device frame inside the artwork.
// Flood-fill that grey from the artwork's corners and turn it white.
const sharp = require('sharp')
const path = require('path')

const dir = path.join(__dirname, '..', 'src', 'assets', 'landing', 'strip')
const isGrey = (r, g, b) => Math.abs(r - g) < 10 && Math.abs(g - b) < 10 && r > 90 && r < 232

async function whiten(name, seeds) {
  const file = path.join(dir, name)
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width, height } = info
  const seen = new Uint8Array(width * height)
  const stack = []
  for (const [x, y] of seeds) stack.push(y * width + x)
  let filled = 0
  while (stack.length) {
    const p = stack.pop()
    if (seen[p]) continue
    seen[p] = 1
    const i = p * 4
    if (data[i + 3] === 0 || !isGrey(data[i], data[i + 1], data[i + 2])) continue
    data[i] = data[i + 1] = data[i + 2] = 255
    filled++
    const x = p % width, y = (p / width) | 0
    if (x > 0) stack.push(p - 1)
    if (x < width - 1) stack.push(p + 1)
    if (y > 0) stack.push(p - width)
    if (y < height - 1) stack.push(p + width)
  }
  await sharp(data, { raw: { width, height, channels: 4 } }).png().toFile(file + '.tmp')
  require('fs').renameSync(file + '.tmp', file)
  console.log(name, 'filled', filled)
}

;(async () => {
  // Seeds sit just inside the artwork rectangle (2x coordinates), on the grey frame.
  await whiten('card-4.png', [[60, 60], [1000, 60], [60, 770], [1000, 770], [540, 45]])
  await whiten('card-5.png', [[60, 60], [1000, 60], [60, 770], [1000, 770], [540, 45]])
})()
