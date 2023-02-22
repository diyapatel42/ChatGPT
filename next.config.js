/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir:true,
  },
  images:{
    domains:['chromeunboxed.com', 'lh3.googleusercontent.com']
  },
};

module.exports = nextConfig
