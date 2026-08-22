/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Launch mode: the full site is hidden behind the season-premiere landing.
  // These temporary (307) redirects send every legacy route back to "/".
  // Remove this block to restore the multi-page site.
  async redirects() {
    const hidden = [
      "/episodes",
      "/portfolio",
      "/all",
      "/sponsors",
      "/about",
    ];
    return hidden.flatMap((path) => [
      { source: path, destination: "/", permanent: false },
      { source: `${path}/:slug*`, destination: "/", permanent: false },
    ]);
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
      },
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
      },
    ],
  },
};

export default nextConfig;
