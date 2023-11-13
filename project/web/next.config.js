const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@art/utils', '@art/design-system']);

module.exports = withPlugins([withTM], {
  // ...
});