<template>
  <el-row>
    <el-col :span="24">
      <el-table :data="tableData" stripe>
        <el-table-column v-for="(item,index) in tableOptions" :key="index" :prop="item.prop" :label="item.label" />
      </el-table>
    </el-col>
    <el-col v-if="filterField!=='date_time'" :span="24" class="secondary">
      <el-table :data="secondaryData" stripe>
        <el-table-column label="日期" prop="date_time" />
        <el-table-column label="点击">
          <el-table-column
            v-for="(item,index) in secondaryOptions"
            :key="index"
            :prop="'action_'+item.prop"
            :label="item.label"
          />
        </el-table-column>
        <el-table-column label="下发">
          <el-table-column
            v-for="(item,index) in secondaryOptions"
            :key="index"
            :prop="'send_'+item.prop"
            :label="item.label"
          />
        </el-table-column>
        <el-table-column label="比率">
          <el-table-column
            v-for="(item,index) in secondaryOptions"
            :key="index"
            :prop="'rate_'+item.prop"
            :label="item.label"
          />
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { tableOptionsCommon, secondaryOptions } from '../utils/settings'
export default {
  name: 'DataTable',
  props: {
    tableData: {
      type: Array,
      default: null
    },
    filterField: {
      type: String,
      default: 'date_time'
    },
    secondaryData: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      tableOptions: tableOptionsCommon,
      secondaryOptions
    }
  }
}

</script>

<style lang='scss' scoped>
.secondary{
  margin-top: $normal_distance_size;
}
</style>
