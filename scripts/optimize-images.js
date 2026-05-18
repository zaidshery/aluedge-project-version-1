const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, '..', 'public', 'images');
const outDir = path.join(inputDir, 'optimized');
const sizes = [320, 640, 820, 1200, 1600];

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const inputPath = path.join(inputDir, file);
  for (const w of sizes) {
    const outName = `${name}-${w}${ext}`;
    const outPath = path.join(outDir, outName);
    try {
      await sharp(inputPath).resize({ width: w }).toFile(outPath);
      console.log(`Created ${outName}`);
    } catch (err) {
      console.error(`Failed ${outName}:`, err.message);
    }
  }
}

fs.readdir(inputDir, (err, files) => {
  if (err) return console.error(err);
  const images = files.filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && f !== 'optimized');
  Promise.all(images.map(processImage))
    .then(() => console.log('All images processed'))
    .catch((e) => console.error(e));
});
