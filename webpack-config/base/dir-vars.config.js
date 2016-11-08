var path = require('path');
var moduleExports = {};

// 源文件目录
moduleExports.projectRootDir = path.resolve(__dirname, '../../'); // 项目根目录

moduleExports.srcRootDir = path.resolve(moduleExports.projectRootDir, './src'); // 项目业务代码根目录

moduleExports.componentsDir = path.resolve(moduleExports.srcRootDir, './components'); // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
moduleExports.layoutDir = path.resolve(moduleExports.srcRootDir, './layout'); // 存放UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路
moduleExports.staticRootDir = path.resolve(moduleExports.srcRootDir, './static'); // 静态资源根目录
moduleExports.pagesDir = path.resolve(moduleExports.srcRootDir, './pages'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等

moduleExports.vendorDir = path.resolve(moduleExports.staticRootDir, './vendor'); // 存放所有不能用npm管理的第三方库
moduleExports.dllDir = path.resolve(moduleExports.staticRootDir, './dll'); // 存放由各种不常改变的js/css打包而来的dll
moduleExports.jsDir = path.resolve(moduleExports.staticRootDir, './js');  // 与业务逻辑无关的js库都可以放到这里
moduleExports.configDir = path.resolve(moduleExports.staticRootDir, './config'); // 存放各种配置文件


// 生成文件目录
moduleExports.buildDir = path.resolve(moduleExports.projectRootDir, './build'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

module.exports = moduleExports;
