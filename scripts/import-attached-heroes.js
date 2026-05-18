const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Attached images are in c:\Users\Appex\Desktop\N2\aluedge\part-1-img (outside the project folder)
const srcDir = path.join('c:', 'Users', 'Appex', 'Desktop', 'N2', 'aluedge', 'part-1-img');
const outDir = path.join(__dirname, '..', 'public', 'images', 'optimized');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const mapping = [
  { src: 'AluEdge-zaidshery-1.png', dest: 'aluedge-hero-main-desktop-final.webp', resize: { width: 1600, height: 820 } },
  { src: 'AluEdge-zaidshery-2.png', dest: 'aluedge-hero-alternate-desktop-final.webp', resize: { width: 1400, height: 760 } },
  { src: 'AluEdge-zaidshery-3.png', dest: 'aluedge-hero-mobile-final.webp', resize: { width: 820, height: 1400 } },
];

(async function(){
  for (const m of mapping) {
    const srcPath = path.join(srcDir, m.src);
    const outPath = path.join(outDir, m.dest);
    if (!fs.existsSync(srcPath)) {
      console.error('Source not found:', srcPath);
      continue;
    }
    try {
      await sharp(srcPath)
        .resize({ width: m.resize.width, height: m.resize.height, fit: 'cover', position: 'center' })
        .webp({ quality: 82 })
        .toFile(outPath);
      console.log('Imported', m.dest);
    } catch(e) {
      console.error('Failed', m.dest, e.message);
    }
  }
})();
