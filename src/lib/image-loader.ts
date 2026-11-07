// Product screenshots ship as the full-size original plus copies 640, 1080 and 1600 px wide
// (made by `npm run images`). Each srcset width picks the smallest copy that covers it.
const steps = [640, 1080, 1600];

export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (!src.startsWith('/product/')) return src;
  const step = steps.find((s) => s >= width);
  return step ? src.replace(/\.webp$/, `-${step}.webp`) : src;
}
