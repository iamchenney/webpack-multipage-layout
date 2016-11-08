require('cp');
const utils = require('utils');
const config = require('configModule');

$(() => {
  alert(utils.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'));
  alert(utils.isEmailOrPhone('aaa'));
  utils.ajax('http://www.baidu.com');
  /* global IS_PRODUCTION:true */ // 由于ESLint会检测没有定义的变量，因此需要这一个`global`注释声明IS_PRODUCTION是一个全局变量(当然在本例中并不是)来规避warning
  if (!IS_PRODUCTION) {
    console.log('如果你看到这个Log，那么这个版本实际上是开发用的版本');
    console.log(config.API_ROOT);
  }
});
