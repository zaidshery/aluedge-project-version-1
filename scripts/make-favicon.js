const path = require('path');
const sharp = require('sharp');

async function main() {
  const logoPath = path.join(__dirname, '..', 'public', 'images', 'aluedge-logo.png');
  const outputPath = path.join(__dirname, '..', 'public', 'favicon.ico');
  const outputPngPath = path.join(__dirname, '..', 'public', 'favicon.png');

  console.log('Reading logo from:', logoPath);
  const image = sharp(logoPath);
  const metadata = await image.metadata();
  console.log('Original metadata:', metadata);

  // Let's do a safe extraction first
  // The first part of the logo from 0 to 310 contains the symbol
  const width = 310;
  const height = metadata.height;

  console.log(`Extracting region: left=0, top=0, width=${width}, height=${height}`);
  
  // We can convert the image to raw pixels or perform operations sequentially to isolate any errors
  const croppedBuffer = await image
    .extract({ left: 0, top: 0, width: width, height: height })
    .toBuffer();

  console.log('Cropped successfully, trimming transparency...');
  
  const trimmedBuffer = await sharp(croppedBuffer)
    .trim()
    .toBuffer();

  const trimmedMeta = await sharp(trimmedBuffer).metadata();
  console.log('Trimmed metadata:', trimmedMeta);

  // Resize and pad to a square
  console.log('Resizing and padding to square...');
  const size = 512;
  await sharp(trimmedBuffer)
    .resize({
      width: size,
      height: size,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(outputPngPath);

  console.log('Created favicon.png at:', outputPngPath);

  // Also create a smaller 32x32 ico file if possible, or just use the PNG. Next.js supports PNG favicons perfectly!
  // Let's also create 32x32 favicon.ico using sharp
  await sharp(trimmedBuffer)
    .resize({
      width: 32,
      height: size,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .resize(32, 32)
    .toFile(outputPath);
  
  console.log('Created favicon.ico at:', outputPath);
}

main().catch(console.error);
