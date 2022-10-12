/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SETUP_URL: 'http://knock-knock-db.herokuapp.com/setup',
    TEST_URL: 'http://127.0.0.1:4000/setup'

  },
}

module.exports = nextConfig
