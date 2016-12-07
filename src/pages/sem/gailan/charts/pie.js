const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/pie');
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

const moduleExports = {

  renderSinglePie(eleId, data, op, color) {
    var myChart = echarts.init(document.getElementById(eleId));

    // var a = data.total_view; // a展现

    var option = {
      color: color,
      tooltip: {
        trigger: 'item',
        position: 'inner',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          startAngle: 270,
          radius: [
            '50%', '70%',
          ],
          avoidLabelOverlap: false,
          itemStyle: {
            normal: {
                //                                    color:['#2e323c','#fcad84','#ecc7bf','#8acbc7','#e25d6e'],
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
            emphasis: {
              label: {
                show: false,
                formatter: ' {c}({d}%)\n{b}',
                position: 'center',
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'bold',
                },
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: op,
        },
      ],
    };

    myChart.setOption(option);
  },
  renderPie(el) {
    var b;
    var c; // b最多c最少点击
    var b1;
    var c1; // b最多c最少下载
    var b2;
    var c2; // b最多c最少激活
    var color1 = [];
    var color2 = [];
    var color3 = [];
    if (el.total_pv < el.yestoday_total_pv) { // 点击量
      $('.biao1-1').css('color', '#5d36b0').html(((el.total_pv / el.total_view) * 100).toFixed(1) + '%');
      color1 = ['#00b39d', '#5d36b0', '#dcdcdc'];
      b = el.yestoday_total_pv;
      c = el.total_pv;
    } else {
      $('.biao1-1').css('color', '#e32b36').html(((el.total_pv / el.total_view) * 100).toFixed(1) + '%');
      color1 = ['#00b39d', '#e32b36', '#dcdcdc'];
      b = el.total_pv;
      c = el.yestoday_total_pv;
    }
    if (el.total_count < el.yestoday_total_count) { // 下载量
      $('.biao2-1').css('color', '#5d36b0').html(((el.total_count / el.total_view) * 100).toFixed(1) + '%');
      color2 = ['#00b39d', '#5d36b0', '#dcdcdc'];
      b1 = el.yestoday_total_count;
      c1 = el.total_count;
    } else {
      $('.biao2-1').css('color', '#e32b36').html(((el.total_count / el.total_view) * 100).toFixed(1) + '%');
      color2 = ['#00b39d', '#e32b36', '#dcdcdc'];
      b1 = el.total_count;
      c1 = el.yestoday_total_count;
    }
    if (el.active_rate < el.yestoday_active_rate) { // 激活量
      $('.biao3-1').css('color', '#5d36b0').html(((el.active_rate / el.total_view) * 100).toFixed(1) + '%');
      color3 = ['#00b39d', '#5d36b0', '#dcdcdc'];
      b2 = el.yestoday_active_rate;
      c2 = el.active_rate;
    } else {
      $('.biao3-1').css('color', '#e32b36').html(((el.active_rate / el.total_view) * 100).toFixed(1) + '%');
      color3 = ['#00b39d', '#e32b36', '#dcdcdc'];
      b2 = el.active_rate;
      c2 = el.yestoday_active_rate;
    }
    const a = el.total_view;  // a展现
    const op1 = [];
    const op2 = [];
    const op3 = [];
    //                        op1.push(c);
    op1[0] = {
      value: c,
      name: 'a',
    };
    op1[1] = {
      value: b - c,
      name: 'b',
    };
    op1[2] = {
      value: a - b,
      name: 'c',
    };
    op2[0] = {
      value: c1,
      name: 'a',
    };
    op2[1] = {
      value: b1 - c1,
      name: 'b',
    };
    op2[2] = {
      value: a - b1,
      name: 'c',
    };
    op3[0] = {
      value: c2,
      name: 'a',
    };
    op3[1] = {
      value: b2 - c2,
      name: 'b',
    };
    op3[2] = {
      value: a - b2,
      name: 'c',
    };
    console.log(op2);
    console.log(op3);

    this.renderSinglePie('pie', el, op1, color1);
    this.renderSinglePie('pie1', el, op2, color2);
    this.renderSinglePie('pie2', el, op3, color3);
  },
};

module.exports = moduleExports;
