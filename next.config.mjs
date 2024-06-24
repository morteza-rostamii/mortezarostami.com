/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        //pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        //pathname: '',
      },
      //loremflickr.com
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
        //pathname: '',
      },
      //avatars.githubusercontent.com
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        //pathname: '',
      },
      //cloudflare-ipfs.com
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
        port: '',
        //pathname: '',
      },
    ],
  },
};

export default nextConfig;
