/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.yelp.com/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/restaurants",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-media3.fl.yelpcdn.com",
        port: "",
        pathname: "/bphoto/**",
      },
      {
        protocol: "https",
        hostname: "s3-media4.fl.yelpcdn.com",
        port: "",
        pathname: "/bphoto/**",
      },
      {
        protocol: "https",
        hostname: "s3-media2.fl.yelpcdn.com",
        port: "",
        pathname: "/bphoto/**",
      },
      {
        protocol: "https",
        hostname: "s3-media1.fl.yelpcdn.com",
        port: "",
        pathname: "/bphoto/**",
      },
    ],
  },
};

module.exports = nextConfig;
