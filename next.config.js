/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/tldr-coc',
  assetPrefix: '/tldr-coc',
  images: {
    unoptimized: true,
  },
  eslint: {
    dirs: ['app', 'components'],
  },
}

module.exports = nextConfig
