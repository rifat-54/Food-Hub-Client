import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    formats:["image/avif","image/webp"],
    remotePatterns:[
      {
        protocol:"https",
        hostname:"example.com"
      },
      {
        protocol:"https",
        hostname:"images.pexels.com"
      },
      {
        protocol:"https",
        hostname:"images.unsplash.com"
      },
      {
        protocol:"https",
        hostname:"picsum.photos"
      },
      {
        protocol:"https",
        hostname:"www.sourcesplash.com"
      },
    ]
  }
};

export default nextConfig;
