export default function getData () {
  //获取最近六个月月份
  let month = new Date().getMonth() - 1
  let year = new Date().getFullYear()
  let monthData = [];
  for(let i = 0; i < 6; i++) {
    month =  month -1
    if (month <= 0) {
      year = year - 1
      month = month + 12
    }
    if (month < 10) {
      monthData.push(year + '/0' + month)
    } else {
      monthData.push(year + '/' + month)
    }
  }
  return {
    color: ['#3398DB'],
    tooltip : {
      trigger: 'axis',
      axisPointer : {    // 坐标轴指示器，坐标轴触发有效
        // 默认为直线，可选为：'line' | 'shadow'
        type: 'shadow'
      }
    },
    xAxis: [
      {
        name: '年/月',
        type: 'category',
        data: monthData.reverse(),
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        name: '销量（件）',
        type: 'value'
      }
    ],
    series: [
      {
        type:'bar',
        barWidth: '60%',
        data: [ 52, 200, 334, 390, 330, 220]
      }
    ]
  }
}