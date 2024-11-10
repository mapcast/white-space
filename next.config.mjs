/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/ws/:path*/",
        destination: "http://localhost:8090/:path*/"
      }
    ]
  },
  trailingSlash: true
};

export default nextConfig;
