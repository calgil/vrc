/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONVERTKIT_API_KEY: process.env.CONVERTKIT_API_KEY,
    CONVERTKIT_FORM_ID: process.env.CONVERTKIT_FORM_ID,
    CONVERTKIT_BASE_URL: process.env.CONVERTKIT_BASE_URL,
  },
};

module.exports = nextConfig;
