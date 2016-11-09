require('cp');
const utils = require('utils');
const config = require('configModule');
const echarts = require('echarts');

$(() => {
  /* global IS_PRODUCTION:true */ // 由于ESLint会检测没有定义的变量，因此需要这一个`global`注释声明IS_PRODUCTION是一个全局变量(当然在本例中并不是)来规避warning
  if (!IS_PRODUCTION) {
    console.log('如果你看到这个Log，那么这个版本实际上是开发用的版本');
    console.log(config.API_ROOT);
  }
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
