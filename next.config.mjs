/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hosted on Cloudflare Pages as plain files: `next build` writes the whole site to out/.
  // Redirects and headers live in public/_redirects and public/_headers.
  output: 'export',
  images: {
    // There is no image optimizer on static hosting; product screenshots ship pre-sized copies instead.
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 2048],
  },
};

export default nextConfig;
