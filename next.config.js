/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.g2crowd.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
