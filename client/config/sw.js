module.exports = {
  cacheId: 'my-magical-cache-machine',
  navigateFallback: '/index.html',
  // something like this should allow everything but files ending with `.zip`
  navigateFallbackWhitelist: [],
  runtimeCaching: [
    {
      handler: 'networkFirst',
      urlPattern: '/auth/connect',
    },
  ],
  staticFileGlobs: ['build/**/*.js', 'build/**/*.css', 'build/index.html'],
};
