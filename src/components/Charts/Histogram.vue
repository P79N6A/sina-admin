<template>
  <div id="chart" :style="{width,height}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
export default {
  name: 'Histogram',
  mixins: [resize],
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    source: {
      type: Array,
      default: null
    },
    xAxisName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    xAxisName: {
      handler() {
        this.initChart()
      },
      deep: true
    },
    source: {
      handler() {
        this.initChart()
      },
      deep: true
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('chart'))

      this.chart.setOption({
        color: ['#3398DB'],
        title: {
          text: '数据分布展示',
          textStyle: {
            fontWeight: 'bolder',
            fontSize: 18,
            color: '#000000'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          itemGap: 20,
          feature: {
            dataView: {
              title: '数据视图'
            },
            magicType: { show: true, type: ['bar', 'line'] },
            saveAsImage: { show: true },
            restore: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          name: this.xAxisName

        },
        dataset: {
          source: [
            ...this.source
          ]
        },
        series: [{
          name: '次数',
          type: 'bar',
          barWidth: '50%',
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        }
        ],
        yAxis: [{
          type: 'value'
        }]
      })
    }
  }
}

</script>

<style lang='scss' scoped>

</style>
