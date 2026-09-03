/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Allow static export as fallback if needed
  // output: 'export',
};

module.exports = nextConfig;
