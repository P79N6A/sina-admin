<template>
  <div :id="chartId" :style="{width,height}" />
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
    },
    title: {
      type: String,
      default: '数据分布展示'
    },
    uidCount: {
      type: String,
      default: '0'
    },
    chartId: {
      type: String,
      default: '0'
    },
    tipName: {
      type: String,
      default: '次数'
    },
    legends: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
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
    _initSeries() {
      const res = []
      if (this.source) {
        const length = this.source[0].length - 1
        for (let i = 0; i < length; i++) {
          res.push({
            name: this.legends[i],
            type: 'bar',
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          })
        }
      }
      return res
    },
    initChart() {
      if (this.source.length === 0) {
        this.$message.error('存在空数据项')
        return false
      }
      this.chart = echarts.init(document.getElementById(this.chartId))
      this.chart.setOption({
        title: {
          text: `${this.title}`,
          textStyle: {
            fontWeight: 'bolder',
            fontSize: 16,
            color: '#000000'
          }
        },
        legend: {
          data: this.legends
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
          source: this.source
        },
        series: this._initSeries(),
        yAxis: [{
          type: 'value'
        }]
      }, true)
    }
  }
}

</script>

<style lang='scss' scoped>

</style>
