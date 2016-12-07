const DOMAIN = 'http://192.168.0.1';

const moduleExports = {
  getApiUrl(apiName) {
    return DOMAIN + this[apiName];
  },
  getUser: '/user/userId',
};

module.exports = moduleExports;
