import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/favicon.png",
        permanent: false,
      },
      {
        source: "/weddings/ceremony-due-ricce",
        destination: "/weddings/due-ricce",
        permanent: true,
      },
      {
        source: "/weddings/cocktail-due-ricce",
        destination: "/weddings/due-ricce",
        permanent: true,
      },
      {
        source: "/weddings/ceremony-solo-instrumentalist",
        destination: "/weddings/solo-instrumentalist",
        permanent: true,
      },
      {
        source: "/weddings/cocktail-solo-instrumentalist",
        destination: "/weddings/solo-instrumentalist",
        permanent: true,
      },
      {
        source: "/weddings/ceremony-vocal-piano",
        destination: "/weddings",
        permanent: true,
      },
      {
        source: "/weddings/cocktail-vocal-piano",
        destination: "/weddings",
        permanent: true,
      },
      {
        source: "/weddings/ceremony-kapa-luse",
        destination: "/weddings",
        permanent: true,
      },
      {
        source: "/weddings/cocktail-kapa-luse",
        destination: "/weddings",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eiz.hr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
