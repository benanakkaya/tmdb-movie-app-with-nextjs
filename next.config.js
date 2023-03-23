/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns:[
      {protocol:"https",hostname:"www.themoviedb.org"}
    ]
  },
  env: {
    API_KEY : process.env.API_KEY,
  },
}

module.exports = nextConfig
