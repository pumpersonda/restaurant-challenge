/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-media3.fl.yelpcdn.com",
        port: "",
        pathname: "/bphoto/**",
      },
    ],
  },
};

module.exports = nextConfig;
