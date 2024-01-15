/** @type {import('next').NextConfig} */
const nextConfig = {

    eslint: {
        dirs: ['src'],
      },
    
      reactStrictMode: true,
    swcMinify: true,
      
    // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

}

module.exports = nextConfig
