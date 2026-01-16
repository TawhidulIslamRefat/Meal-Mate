/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',   // https or http
        hostname: '**',      // double star allows any domain
        port: '',            // optional, default is blank
        pathname: '/**',     // allow all paths
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
