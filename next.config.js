/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Add basePath
  basePath: '/',
  trailingSlash: true,
  output: 'export',
}

module.exports = nextConfig