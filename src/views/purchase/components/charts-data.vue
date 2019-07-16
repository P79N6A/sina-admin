<template>
  <el-row>
    <div v-for="(item,index) in currChartsData" :key="index">
      <div>
        <histogram
          height="400px"
          :source="item.data"
          :x-axis-name="item.xAliasName"
          :title="item.title"
          :uid-count="item.uid_count"
          :chart-id="index+''"
        />
      </div>
    </div>
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
