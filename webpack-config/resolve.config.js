var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
module.exports = {
  // 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
  alias: {
    /* 各种目录 */
    iconfontDir: path.resolve(dirVars.staticRootDir, 'iconfont/'),
    /* less */
    lessDir: path.resolve(dirVars.staticRootDir, 'less'),
    configDir: dirVars.configDir,

    /* vendor */
    /* bootstrap 相关 */
    metisMenu: path.resolve(dirVars.vendorDir, 'metisMenu/'),

    /* libs */
    withoutJqueryModule: path.resolve(dirVars.jsDir, 'without-jquery.module'),
    utils: path.resolve(dirVars.jsDir,'utils'),
    libs: path.resolve(dirVars.jsDir, 'libs.module'),

    /* components */

    /* layout */
    layout: path.resolve(dirVars.layoutDir, 'with-nav/html'),
    'layout-without-nav': path.resolve(dirVars.layoutDir, 'without-nav/html'),

    /* logic */
    cp: path.resolve(dirVars.pagesDir, 'common.page'),

    /* config */
    configModule: path.resolve(dirVars.configDir, 'common.config'),
    bootstrapConfig: path.resolve(dirVars.configDir, 'bootstrap.config'),
  },

  root: [
    path.resolve(__dirname,'../src'),
    path.resolve(__dirname,'../node_modules')
  ],
  // 当require的模块找不到时，尝试添加这些后缀后进行寻找
  extentions: ['', 'js'],
};
