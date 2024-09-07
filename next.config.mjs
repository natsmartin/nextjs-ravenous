/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3-media1.fl.yelpcdn.com',
                port: '',
                pathname: '/bphoto/**'
            },
            {
                protocol: 'https',
                hostname: 's3-media2.fl.yelpcdn.com',
                port: '',
                pathname: '/bphoto/**'
            },
            {
                protocol: 'https',
                hostname: 's3-media3.fl.yelpcdn.com',
                port: '',
                pathname: '/bphoto/**'
            },
            {
                protocol: 'https',
                hostname: 's3-media4.fl.yelpcdn.com',
                port: '',
                pathname: '/bphoto/**'
            },
        ]
    }

};

export default nextConfig;
