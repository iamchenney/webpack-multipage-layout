const content = require('./content.ejs');
const layout = require('layout');

module.exports = layout.init({
  pageTitle: 'echarts demo',
}).run(content());
