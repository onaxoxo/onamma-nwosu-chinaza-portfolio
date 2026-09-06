/**
 * Downscales the Figma PNG exports to 2x the size they are actually displayed at.
 * Every image is rendered at a fixed CSS size (the design is a fixed 1440px
 * canvas), so anything beyond 2x is weight with no visible benefit.
 */
// Run with: npm i -D sharp && node scripts/resize-assets.cjs
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

// target width = 2 x the width the image is rendered at in the layout
const targets = {
  'landing/portrait.png': 880, // 440px portrait in the About section
  'landing/thumb-sora.png': 940, // 470px project card thumbnails
  'landing/thumb-ocicat.png': 940,
  'landing/thumb-vendify.png': 940,
  'landing/thumb-budget.png': 940,
  'landing/avatar-1.png': 96, // 48px review avatar
  'sora/hero-cover.png': 2400, // 1200px hero cover
  'sora/screen-dashboard.png': 1880, // 940px carousel slides
  'sora/screen-renewals.png': 1880,
  'sora/screen-spending.png': 1880,
  'sora/screen-alternatives.png': 1880,
  'ocicat/hero-cover.png': 2400,
  'ocicat/screen-dashboard.png': 1712, // 856px inner screen
  'ocicat/screen-template.png': 1712,
  'ocicat/screen-editor.png': 1712,
  'ocicat/decision-editor.png': 1838, // 919px embedded mockup
  'cver/hero-cover.png': 2400,
  'cver/screen-landing.png': 1880,
  'budget/hero-cover.png': 2400,
  'budget/screen-dashboard.png': 1880,
  'vendify/screen-1.png': 1880,
  'vendify/screen-2.png': 1880,
  'vendify/screen-3.png': 1880,
  'vendify/screen-4.png': 1880,
}

const root = 'src/assets'

async function run() {
  let before = 0
  let after = 0
  for (const [rel, width] of Object.entries(targets)) {
    const file = path.join(root, rel)
    const size = fs.statSync(file).size
    before += size
    const meta = await sharp(file).metadata()
    if (meta.width <= width) {
      after += size
      console.log(`skip   ${rel} (${meta.width}px <= ${width}px)`)
      continue
    }
    const tmp = file + '.tmp'
    await sharp(file).resize({ width, withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(tmp)
    fs.renameSync(tmp, file)
    const now = fs.statSync(file).size
    after += now
    console.log(
      `resize ${rel}  ${meta.width} -> ${width}  ${(size / 1048576).toFixed(2)}MB -> ${(now / 1048576).toFixed(2)}MB`,
    )
  }
  console.log(`\nTOTAL ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`)
}

run()
