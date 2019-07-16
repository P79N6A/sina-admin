<template>
  <el-row>
    <el-col :span="24" class="normal-padding table-wrap-top top-radius">
      <el-row type="flex" justify="space-between">
        <el-col :span="8">
          <svg-icon :icon-class="iconClass" />
          <span class="h3-font">{{ title }}</span>
        </el-col>
        <el-col :span="8" class="text-align-right">
          <slot name="count" />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'PanelTop',
  props: {
    title: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: 'nested'
    }
  },
  data() {
    return {}
  }

}

</script>

<style lang='scss' scoped>
.normal-padding{
  padding: 0 15px;
  box-sizing: border-box;
}
.table-wrap-top{
  border-bottom: 1px solid #BBBBBB;
  height: 40px;
  line-height: 40px;
  background-color: #DCDFE6;
}
.text-align-right{
  text-align: right;
}
</style>
