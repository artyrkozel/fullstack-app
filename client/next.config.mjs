/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
      return config
    },
    images: {
      localPatterns: [
        {
          pathname: '/assets/images/**',
          search: '',
        },
      ],
    },
  }
  
  export default nextConfig;
