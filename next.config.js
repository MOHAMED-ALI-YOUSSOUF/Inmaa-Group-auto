/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
     unoptimized: true ,
     domains: [
      'www.netcarshow.com',
      'imgd.aeplcdn.com',
      // ajoute ici tous les domaines des images que tu utilises
    ],
     

  },
};

module.exports = nextConfig;
