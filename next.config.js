/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
     unoptimized: true ,
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'netcarshow',
      },
      {
        protocol: 'https',
        hostname: 'imgd.aeplcdn',
      },
    ],
     
     

  },
};

module.exports = nextConfig;
