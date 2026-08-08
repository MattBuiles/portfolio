/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // GitHub Pages: genera ./out estático
  basePath: "/portfolio",
  images: { unoptimized: true },
  trailingSlash: true,
  transpilePackages: ["invest-ui"],
};

export default nextConfig;
