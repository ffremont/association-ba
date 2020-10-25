module.exports = {
    globDirectory: './dist/',
    globPatterns: [
      '\*\*/\*.{html,js,css,svg}'
    ],
    swDest: './dist/my-sw.js',
    clientsClaim: true,
    skipWaiting: true
  };