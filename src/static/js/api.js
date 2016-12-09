const config = require('configModule');

const DOMAIN = config.API_ROOT;

const moduleExports = {
  getApiUrl(apiName) {
    return DOMAIN + this[apiName];
  },
  getUser: '/user/userId',
  getSKWord: '/keywords/sword',
  getAccountWeekCost: '/account/getweekcost',
  getAccountTwoWeek: '/account/twoweek',
  getAccountAll: '/account/all',
};

module.exports = moduleExports;
