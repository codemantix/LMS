/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  eslint: {
    // Disable ESLint during builds to avoid "Converting circular structure to JSON" error
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
