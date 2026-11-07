// Makes the 640/1080/1600 px copies of each product screenshot that src/lib/image-loader.ts points to.
// Run after adding or replacing anything in public/product/: npm run images
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.join(import.meta.dirname, '..', 'public', 'product');
const steps = [640, 1080, 1600];
const originals = (await readdir(dir)).filter((f) => f.endsWith('.webp') && !/-\d+\.webp$/.test(f));

for (const file of originals) {
  const src = path.join(dir, file);
  const { width } = await sharp(src).metadata();
  for (const step of steps) {
    const out = path.join(dir, file.replace(/\.webp$/, `-${step}.webp`));
    // An image narrower than the step is copied at its own size, so every name the loader asks for exists.
    await sharp(src).resize({ width: Math.min(step, width) }).webp({ quality: 82, effort: 6 }).toFile(out);
  }
  console.log(`${file} (${width}px) → ${steps.join(', ')}`);
}
