import Histogram from '@/components/Charts/Histogram';
<template>
  <Histogram />
</template>

<script>
import Histogram from '@/components/Charts/Histogram'
export default {
  name: 'DataChart',
  components: {
    Histogram
  },
  props: {
    currChartsData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  }
}

</script>

<style lang='scss' scoped>

</style>
