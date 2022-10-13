/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SETUP_URL: 'https://knock-knock-db.herokuapp.com/setup',
    TEST_URL: 'http://127.0.0.1:4000/setup',
    NEWJOKE_URL: 'https://knock-knock-db.herokuapp.com/newjoke',
    NEWJOKE_URL_TEST: 'http://127.0.0.1:4000/newjoke',
    FIREBASE_API_KEY: 'AIzaSyDQR5nC6gEfjpK88oW9NkML7YkjEzri4Gc',

  },
}

module.exports = nextConfig
