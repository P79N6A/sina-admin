<template>
  <el-row>
    <el-col :span="22" :offset="1">
      <histogram height="400px" :source="source" :x-axis-name="xAxisName" />
    </el-col>
  </el-row>
</template>

<script>
import Histogram from '@/components/Charts/Histogram'
export default {
  name: 'ChartsData',
  components: {
    Histogram
  },
  props: {
    currChartsData: {
      type: Object,
      default: null
    },
    xName: {
      type: String,
      default: '区间'
    }
  },
  data() {
    return {
      xAxisName: '',
      dataSet: []
    }
  },
  watch: {
    currChartsData: {
      handler(newValue) {
        this.initProps(newValue)
        console.log(newValue)
      },
      deep: true
    }
  },
  created() {
    if (this.currChartsData) {
      this.initProps(this.currChartsData)
    } else {
      this.initProps()
    }
  },
  methods: {
    resetData() {
      this.xAxisName = ''
      this.source = []
    },
    initProps(dataSource = {}) {
      this.resetData()
      Object.keys(dataSource).forEach(item => {
        this.source.push([item, dataSource[item]])
      })
      this.xAxisName = this.xName
      this.yAxisName = '次数'
    }
  }
}

</script>

<style lang='scss' scoped>
  .el-row{
    margin-top: $normal_distance_size*2.5;
    margin-bottom: $normal_distance_size;
  }
</style>
