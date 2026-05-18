const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const input = path.join(__dirname, '..', 'public', 'images', 'hero-architecture.jpg');
const outDir = path.join(__dirname, '..', 'public', 'images', 'optimized');
const widths = [320, 640, 820, 1200, 1600];

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function process() {
  for (const w of widths) {
    const outJpg = path.join(outDir, `hero-architecture-${w}.jpg`);
    const outWebp = path.join(outDir, `hero-architecture-${w}.webp`);
    try {
      // center crop to a 16:10-ish hero aspect ratio (approx)
      await sharp(input)
        .resize({ width: w, height: Math.round(w * 0.62), fit: 'cover', position: 'center' })
        .jpeg({ quality: 80 })
        .toFile(outJpg);
      await sharp(input)
        .resize({ width: w, height: Math.round(w * 0.62), fit: 'cover', position: 'center' })
        .webp({ quality: 78 })
        .toFile(outWebp);
      console.log(`Created hero-architecture-${w}.{jpg,webp}`);
    } catch (err) {
      console.error('Error processing', w, err.message);
    }
  }
}

process();
