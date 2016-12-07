const content = require('./content.ejs');
const layout = require('layout');

module.exports = layout.init({
  pageTitle: '概览',
}).run(content());
