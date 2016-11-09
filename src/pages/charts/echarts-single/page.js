require('cp');
const utils = require('utils');
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

$(() => {
  console.log(utils.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'));

  const myChart = echarts.init(document.getElementById('charts'));

  myChart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    }],
  });
});
