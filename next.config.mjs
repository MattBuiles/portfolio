/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // GitHub Pages: genera ./out estático
  basePath: "/portfolio",
  images: { unoptimized: true },
  trailingSlash: true,
  transpilePackages: ["strata"],
};

export default nextConfig;
