const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const input = path.join(__dirname, '..', 'public', 'images', 'hero-architecture.jpg');
const outDir = path.join(__dirname, '..', 'public', 'images', 'optimized');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const tasks = [
  {
    name: 'aluedge-hero-main-desktop-final.webp',
    width: 1600,
    height: 820,
    fit: 'cover',
    position: 'center'
  },
  {
    name: 'aluedge-hero-alternate-desktop-final.webp',
    width: 1400,
    height: 760,
    fit: 'cover',
    position: 'center'
  },
  {
    name: 'aluedge-hero-mobile-final.webp',
    width: 820,
    height: 1400,
    fit: 'cover',
    position: 'center'
  }
];

async function run() {
  for (const t of tasks) {
    const out = path.join(outDir, t.name);
    try {
      await sharp(input)
        .resize({ width: t.width, height: t.height, fit: t.fit, position: t.position })
        .webp({ quality: 80 })
        .toFile(out);
      console.log('Created', t.name);
    } catch (err) {
      console.error('Failed', t.name, err.message);
    }
  }
}

run();
