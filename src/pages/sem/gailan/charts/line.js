const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/pie');
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

/* getSeries({ name: '总消费', data: [] }, { name: 'H5展现', data: [] }) */
function getSeries(...datas) {
  var series = [];
  for (const data of datas) {
    series.push({
      name: data.name,
      type: 'line',
      line: '总量',
      data: data.data,
      symbol: 'emptyCircle',
      symbolSize: 3,
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
    });
  }
}

const moduleExports = {

  renderLine(eleId, xDatas, datas) {
    const series = getSeries(datas);
    var myChart = echarts.init(document.getElementById(eleId));
    var option = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        selected: {
          按钮点击: false,
          H5展现: false,
          下载率: false,
          激活率: false,
        },
        data: ['总消费', '按钮点击', 'H5展现', '下载率', '激活率'],
      },
      toolbox: {
        show: true,
        feature: {
          mark: {
            show: true,
          },
          dataView: {
            show: true,
            readOnly: false,
          },
          magicType: {
            show: true,
            type: ['line', 'bar', 'stack', 'tiled'],
          },
          restore: {
            show: true,
          },
          saveAsImage: {
            show: true,
          },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          //                                    boundaryGap : false,
          boundaryGap: true,
          //                                    splitLine: {show:false},
          //                                    boundaryGap: true,
          data: xDatas,
          axisLine: { // 轴线
            show: true,
            lineStyle: {
              color: '#999999',
              type: 'solid',
              width: 2,
            },
          },
          axisTick: { // 轴标记
            onGap: false,
            show: true,
            length: 10,
            lineStyle: {
              color: 'red',
              type: 'solid',
              width: 2,
            },
          },
          axisLabel: {
            show: true,
            interval: '0', // {number}
            //                                        rotate: 30,
            //                                        margin:8,
            textStyle: {
              color: '#99999',
              fontFamily: 'sans-serif',
              fontSize: 12,
              fontStyle: 'italic',
              fontWeight: 'bold',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#483d8b',
              type: 'dashed',
              width: 0,
            },
          },
        },
      ],
      yAxis: [
        {
              //                                    ,
          type: 'value',
          position: 'left',
          splitNumber: 10,
          //                                    boundaryGap: true,
          axisLine: { // 轴线
            show: true,
            lineStyle: {
              color: 'red',
              type: 'dashed',
              width: 0,
            },
          },
          axisTick: { // 轴标记
            show: true,
            //                                        onGap:false,
            length: 10,
            lineStyle: {
              color: 'green',
              type: 'solid',
              width: 2,
            },
          },
          axisLabel: {
            show: true,
            interval: 'auto', // {number}
            //                                        rotate: -45,
            margin: 18,
            textStyle: {
              color: '#999999',
              fontFamily: 'verdana',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: 'bold',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#483d8b',
              type: 'dotted',
              width: 0,
            },
          },
        },
        {
          type: 'value',
          splitNumber: 10,
          axisLine: { // 轴线
            show: true,
            lineStyle: {
              color: 'red',
              type: 'dashed',
              width: 0,
            },
          },
          axisTick: { // 轴标记
            show: true,
            //                                        onGap:false,
            length: 10,
            lineStyle: {
              color: 'green',
              type: 'solid',
              width: 2,
            },
          },
          axisLabel: {
            show: true,
            interval: 'auto', // {number}
            //                                        rotate: 45,
            margin: 18,
            textStyle: {
              color: '#999999',
              fontFamily: 'verdana',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: 'bold',
            },
            formatter: function (value) {
              return value + '%';
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#483d8b',
              type: 'dotted',
              width: 0,
            },
          },
        },
      ],
      series: series,
    };
    myChart.setOption(option);
    window.onresize = myChart.resize;
  },
};

module.exports = moduleExports;
