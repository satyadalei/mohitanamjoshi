/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.rareblocks.xyz',
                // pathname: '*', // You can use wildcards for the path
            },
        ],
    },
};

export default nextConfig;
