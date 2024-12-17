/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/shared/config/i18n/request.ts');

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
  
  export default withNextIntl(nextConfig);
