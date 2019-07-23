<template>
  <el-row>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        prop="index"
        label="序号"
        width="60"
      />
      <el-table-column
        prop="field"
        label="field"
        width="220"
      />
      <el-table-column
        prop="reg_time"
        label="reg_time"
        sortable
      />
      <el-table-column
        prop="uid"
        label="uid"
        sortable
        width="70"
      />
      <el-table-column
        prop="gender"
        label="gender"
        sortable
        width="100"
      />
      <el-table-column
        prop="age"
        label="age"
        sortable
        width="80"
      />
      <el-table-column
        prop="tag_ids"
        label="tag_ids"
        sortable
        width="100"
      />
      <el-table-column
        prop="cat_ids"
        label="cat_ids"
        sortable
      />
      <el-table-column
        prop="city_level"
        label="city_level"
        sortable
      />
      <el-table-column
        prop="obj_ids"
        label="obj_ids"
        width="80"
      />
      <el-table-column
        prop="user_type_id"
        label="user_type_id"
        sortable
        width="140"
      />
    </el-table>
    <el-row>
      <el-col v-if="tableData.length!==0" :span="8" :offset="1" class="page-text h3-font">
        从&nbsp;{{ tableData[0].index }}&nbsp;到&nbsp;{{ tableData[tableData.length-1].index }}&nbsp;/总共&nbsp;{{ wholeData.length }}&nbsp;条数据
      </el-col>
      <el-col v-else class="h3-font page-text" :span="8" :offset="1">
        数据为空/
        <span>(过滤总条数&nbsp;{{ currWholeLength }}&nbsp;条)</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="wholeData.length"
          :page-size="page_size"
          hide-on-single-page="true"
          :current-page="currPageIndex"
          @current-change="sizeChange"
        />
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import { coverageFormat } from '../utils/data-format'
import { getCoverageData } from '@/apis/purchases/index'
export default {
  name: 'DataTable',
  props: {
    fieldValue: {
      type: String,
      default: 'task_id'
    },
    filterValue: {
      type: String,
      default: ''
    },
    paginationValue: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      wholeData: [], // 所有数据
      coverages_task_id: [],
      coverages_day: [],
      currWholeLength: 0, // 当前field下数据长度
      tableData: [], // 当前分页展示数据
      prevFilterLength: 0, // 上一次筛选数据长度
      page_size: this.paginationValue, // 分页器分页依据
      currPageIndex: 1, // 分页器当前页
      hasFiltered: false, // 数据是否被筛选
      prevWholeDataLength: 0,
      fieldMap: {
        'task_id': [],
        'date_time': []
      }
    }
  },
  watch: {
    paginationValue(newValue) { // 分页器设置
      this.page_size = newValue
      this.sizeChange()
    },
    fieldValue(newValue) {
      this.wholeData = this.fieldMap[newValue]
      this.currWholeLength = this.fieldMap[newValue].length
      this.sizeChange()
    },
    filterValue(newValue) { // 数据过滤
      const length = newValue.length
      if (this.prevFilterLength > length) {
        this.wholeData = this.fieldMap[this.fieldValue]
        this.currPageIndex = 1
      }
      this.prevFilterLength = length
      this.wholeData = this.wholeData.filter(item => this._getSliceValue(item.field, length) === newValue)
      this.prevWholeDataLength = this.wholeData.length
      if (this.wholeData.length === 0) {
        this.tableData = []
        return 0
      }
      this._resetIndex()
      this.sizeChange()
      this.currPageIndex = 1
    }
  },
  created() {
    this._initData()
  },
  methods: {
    _getSliceValue(value, length) { // 字符串截取辅助
      return value.slice(0, length)
    },
    _resetIndex() { // index重置
      this.wholeData.forEach((item, index) => {
        item.index = index + 1
      })
    },
    _initData() { // 数据请求处理
      let result
      getCoverageData().then(res => {
        result = coverageFormat(res.data)
        this.coverages_task_id = result.coverages_task_id // taskId
        this.coverages_day = result.coverages_day // dt
        this.wholeData = this.coverages_task_id
        this.fieldMap['task_id'] = this.coverages_task_id
        this.fieldMap['date_time'] = this.coverages_day
        this.currWholeLength = this.fieldMap[this.fieldValue].length
        this.sizeChange()
      }).catch(err => {
        this.$notify({
          title: '未知错误',
          message: '请检查网络刷新重试',
          type: 'error'
        })
        console.error(err)
      })
    },
    sizeChange(pageIndex = 1) { // 数据分页显示处理
      this.tableData = this.wholeData.slice((pageIndex - 1) * this.paginationValue, pageIndex * this.paginationValue)
    }
  }
}

</script>

<style lang='scss' scoped>
.el-col{
  text-align: center;
}
.page-text{
  text-align: left;
  margin-top: $small_distance_size;
}
.el-pagination{
  margin-bottom: $normal_distance_size;
}
</style>
