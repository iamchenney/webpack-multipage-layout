var fs = require('fs');
var rimraf = require('rimraf');
var dirVars = require('../base/dir-vars.config.js');
rimraf(dirVars.buildDir, fs, function cb() {
  console.log('build目录已清空');
});
