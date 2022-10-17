/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SETUP_URL: process.env.NEXT_PUBLIC_SETUP_URL,
    NEWJOKE_URL: process.env.NEXT_PUBLIC_NEWJOKE_URL,
    FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    APPID: process.env.APPID,
  },
}

module.exports = nextConfig
