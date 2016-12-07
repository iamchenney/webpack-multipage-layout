/**
 * Created by jy on 2016/12/6.
 */
require('cp');
const utils = require('utils');
// 引入 ECharts 主模块
require('static/css/reset.css');
require('./page.css');

const lineChart = require('./charts/line');
const pieChart = require('./charts/pie');

const apiUrl = require('static/js/api');

function ajax(str, name, us) {
  $('#main').show();
  $('#dropdownMenu1').html('近两周总体数据 <span class="caret"></span>');
  console.log(str);
  $.ajax({
    type: 'get',
    url: 'http://sem.yushanapp.com/account/twoweek?c1=' + str + '&user=' + name + '&us=' + us + '&page=new_概览',
    data: '',
    anync: true,
    beforeSend: function () {
      $('.spinner1').show();
    },
    success: function (el) {
      var activeRate = [];
      var days = [];
      var downloadRate = [];
      var totalCost = [];
      var totalPV = [];
      var totalCount = [];
        //            console.log(el);
      for (let i = 0; i < el.length; i++) {
        activeRate.push(el[i].activeRate);
        days.push(el[i].date);
        downloadRate.push(el[i].downloadRate);
        totalCost.push(el[i].cost);
        totalPV.push(el[i].totalPV);
        totalCount.push(el[i].totalCount);
      }
      lineChart.renderLine();
    },
    error: function () {
      console.log('ERROR');
    },
    complete: function () {
        //            $('.spinner1').hide();
      $('.clear').show();
    },

  });
  $.ajax({
    type: 'get',

    url: 'http://sem.yushanapp.com/account/getweekcost?appid=' + str + '&user=' + name + '&us=' + us + '&page=new_概览',
    data: '',
    anync: true,
    beforeSend: function () {
      $('.spinner1').show();
    },
    success: function (el) {
        //            console.log('getweek'+el);
      var arr = [];
      var arr2 = [];
      var arr3 = [];
      if (el.length !== 0) {
        for (let i = 0; i < el.data.length; i++) {
          arr[i] = el.data[i].date;
        }
        for (let c = 0; c < el.data.length; c++) {
          arr2.push(el.data[c].cost);
        }
      }

        //             for(var o=0;o<arr2.length;o++){
      arr3[0] = {
        name: '消费',
        type: 'line',
        symbol: 'emptyCircle',
        symbolSize: 3,
        line: '总量',
        data: arr2,
        //                    symbol:'none',
        smooth: true,
        itemStyle: {
          normal: {
            lineStyle: { // 系列级个性化折线样式，横向渐变描边
              width: 2,
            },
          },
          emphasis: {
            label: {
              show: true,
            },
          },
        },
      };
      //            }
      console.log(arr3);
      lineChart.renderLine();
    },
    error: function () {
      console.log('ERROR');
    },
    complete: function () {
      $('.clear').show();
    },

  });
}

function upload(str, name, us) {
  ajax(str, name, us);
  if (us === '泰佛之家') {
    $('.dow').text('关注量');
    $('.biao2-2').text('关注率');
  }
  console.log('str' + str);
  $.ajax({
    type: 'get',
    url: 'http://sem.yushanapp.com/account/all?c1=' + str + '&user=' + name + '&us=' + us + '&page=new_概览',
    data: '',
    anync: true,
    beforeSend: function () {
      $('.clear').hide();
      $('.spinner1').show();
    },
    success: function (el) {
      console.log(el);
      if (el.mobileBalance === null) {
        el.mobileBalance = '无';
      }
      //            $('.ui-b2').text(el.activeRate);
      //            $('.ui-b1').text(el.downloadRate);

      if (el.total_active === 0) {
        $('.yushan-yin2').hide();
        $('.yushan-yin1').show();
      }
      $('.month').text(el.monthCost);
      $('.download').text(el.totalCount);
      $('.show').text(el.total_view);
      $('.today').text(el.cost);
      $('.pv').text(el.totalPV);
      $('.active').text(el.total_active);
      $('.yesterday').text(el.yesterdayCost);
      const options1 = {
        title: '成本 ' + (el.cost / el.totalCount).toFixed(3),
      };
      const options3 = {
        title: '成本 ' + (el.cost / el.totalPV).toFixed(3),
      };
      const options4 = {
        title: '成本 ' + (el.cost / el.total_active).toFixed(3),
      };
      $('.download').tooltip(options1);
      //            $('.show').tooltip(options2);
      $('.pv').tooltip(options3);
      $('.active').tooltip(options4);

      const tb = (Math.abs(el.total_view - el.yestoday_total_view) / el.yestoday_total_view).toFixed(4);
      const tb1 = (tb * 100).toFixed(2);
      if (el.total_view - el.yestoday_total_view >= 0) {
        $('.tb').css('color', 'red');
        $('.zeng').attr('src', './images/增.png');
      } else {
        $('.tb').css('color', '#5e35b1');
        $('.zeng').attr('src', './images/减.png');
      }
      $('.tb').text(tb1 + '%');
      $('.progress-bar').css('width', tb1 + '%');

      pieChart.renderPie(el);
    },
    error: function () {
      console.log('ERROR');
    },
    complete: function () {
        //            $('.spinner1').hide();
      $('.clear').show();
    },
  });
}

$(() => {
  console.log(utils.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'));
  console.log(apiUrl.getApiUrl('getUser'));

  $('.start').hover(function () {
    $(this).attr('src', './images/颜色填充-6-拷贝@2x.png');
  }, function () {
    $(this).attr('src', './images/颜色填充-6-拷贝-5@2x.png');
  });

  $('.start1').hover(function () {
    $(this).attr('src', './images/转化icon (2).png');
  }, function () {
    $(this).attr('src', './images/转化icon.png');
  }).click(function () {
    $('.yushan-yin2').hide();
    $('.yushan-yin1').show();
  });
  $('.near_twoweek').click(function () {
    $('#main').show();
    $('#main1').hide();
    $('#dropdownMenu1').html('近两周总体数据 <span class="caret"></span>');
  });
  $('.near_week').click(function () {
    $('#main1').show();
    $('#main').hide();
    $('#dropdownMenu1').html('每周总消费趋势 <span class="caret"></span>');
  });

  $('.clear').hide();

  // const a = utils.getUrlParameter('username');
  const a = location.search.split('?')[1];
  const b = a.split('&');
  const str = decodeURI(b[0].split('=')[1]);
  const name = decodeURI(b[1].split('=')[1]);
  const us = decodeURI(b[2].split('=')[1]);
  console.log('hhhh=' + str);
  if (str !== undefined) {
    upload(str, name, us);
  }
});
