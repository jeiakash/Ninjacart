/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable images from external sources if needed
    images: {
      domains: [],
    },
    // Optimize performance
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    // Uncomment for internationalization if needed
    // i18n: {
    //   locales: ['en'],
    //   defaultLocale: 'en',
    // },
  }
  
  module.exports = nextConfig
  
  