const path = require('path');

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'topitop.vteximg.com.br',
        port: '',
        pathname: '/arquivos/**',
      },
      {
        protocol: 'https',
        hostname: 'tommyperu.vtexassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
