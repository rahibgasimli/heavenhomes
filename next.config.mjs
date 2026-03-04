/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mr-bauunternehmen.de",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // əgər unsplash istifadə edirsənsə
      },
    ],
  },
};
export default nextConfig;
