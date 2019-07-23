<template>
  <el-row>
    <el-col>
      <histogram
        height="400px"
        :source="currChartsData"
        :x-axis-name="xAliasName"
        :legends="legends"
        :legends-controller="legendsController"
      />
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
      type: Array,
      default: null
    },
    xAliasName: {
      type: String,
      default: ''
    },
    legends: {
      type: Array,
      default: null
    },
    legendsController: {
      type: Object,
      default: null
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
