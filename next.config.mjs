/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Product screenshots are 2x captures; these widths cover phone to large desktop.
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 2048],
  },
  // The app lives on its own subdomain; these short paths are handy in ads, bios and emails.
  async redirects() {
    return [
      { source: '/signup', destination: 'https://app.powermytutor.com/signup', permanent: false },
      { source: '/login', destination: 'https://app.powermytutor.com/login', permanent: false },
    ];
  },
};

export default nextConfig;
