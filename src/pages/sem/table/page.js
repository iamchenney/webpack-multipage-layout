const tb = require('./tpl/table.ejs');
const searchTb = require('./tpl/searchTable.ejs');
require('static/vendor/jquery.tablesorter.min');
const utils = require('utils');
const apiUrl = require('static/js/api');

let datas = {};

$(() => {
  utils.ajax(apiUrl.getApiUrl('getSKWord')).done(function (data) {
    datas = data;
    $('#tb').html(tb({ data: datas }));
    $('#myTable').tablesorter();
  });
  $(document).on('click', '.js-op', function () {
    var key = $(this).data('key');
    var list = datas[key];
    $('#tb').html(searchTb({ data: list }));
    $('#myTable').tablesorter();
  });

  $('#btn').click(function () {
    $('#tb').html(tb({ data: datas }));
    $('#myTable').tablesorter();
  });
});
