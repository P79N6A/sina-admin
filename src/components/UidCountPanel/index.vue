<template>
  <el-col :span="24" class="h4-font bold-weight-font">
    <svg-icon icon-class="charts" />
    <span>UID_COUNT:&nbsp;&nbsp;{{ uidCount }}</span>
  </el-col>
</template>

<script>
export default {
  name: 'UidCountPanel',
  props: {
    uidCount: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {}
  }

}

</script>

<style lang='scss' scoped>
.el-col{
  text-align: right;
}
span{
  margin-left:2px;
}
</style>
