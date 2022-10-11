/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {BASE_URL: 'https://knock-knock-db.herokuapp.com/receive'},
}

module.exports = nextConfig
