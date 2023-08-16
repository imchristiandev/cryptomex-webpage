/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Add basePath
  basePath: '/github-pages',
  trailingSlash: true,
  output: 'export',
}

module.exports = nextConfig