/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "image-loader-wedoscao.vercel.app",
            },
        ],
    },
};

module.exports = nextConfig;
