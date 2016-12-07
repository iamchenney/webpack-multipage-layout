var path = require('path');
var dirVars = require('../base/dir-vars.config.js');
module.exports = {
  configFile: path.resolve(dirVars.projectRootDir, './.eslintrc'),
  ignoreFile: path.resolve(dirVars.projectRootDir, './.eslintignore'),
  failOnWarning: false,
  failOnError: true,
  cache: true,
};
