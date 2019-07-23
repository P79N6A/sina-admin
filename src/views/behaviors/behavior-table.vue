<template>
  <el-container>
    <el-header class="header-text-line-height h1-font header-bottom-border">
      用户行为
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="6">
          <el-container>
            <el-main class="bold-weight-font el-main-1">
              date_time:
            </el-main>
            <el-footer class="el-main-1">
              <el-date-picker
                v-model="dateValue"
                type="date"
                placeholder="选择日期"
                format="yyyyMMdd"
              />
            </el-footer>
          </el-container>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-container>
            <el-main class="bold-weight-font el-main-1">
              material_pos:
            </el-main>
            <el-footer class="el-main-1">
              <el-select v-model="totalValue" placeholder="">
                <el-option
                  v-for="(item,index) in totalOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-footer>
          </el-container>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" icon="el-icon-search" class="btn-margin" @click="searchInfo">查询</el-button>
        </el-col>
      </el-row>
      <el-row class="common-container top-radius">
        <el-col :span="24">
          <panel-top title="用户行为数据查询结果" />
          <el-row v-loading="loading">
            <el-col :span="24" class="table-margin">
              <data-table :table-data="currTableData" :secondary-data="secondaryData" :filter-field="filterValue" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import PanelTop from '@/components/PanelTop/index'
import DataTable from './components/data-table'
import { getBehaviors } from '@/apis/behaviors'
import { initCurrTime, timpstampToTime } from '@/utils/date'
import { getPosOptions, initTableDataInDt, secondaryData } from './utils/data-format'
export default {
  name: 'BehaviorTable',
  components: {
    PanelTop, DataTable
  },
  data() {
    return {
      totalValue: 'total', // 素材位
      totalOptions: [],
      dateValue: '',
      currTableData: [],
      filterValue: 'date_time',
      secondaryData: [],
      loading: false,
      defaultDate: ''
    }
  },
  created() {
    this.initApiData(initCurrTime(0, 0, -1))
    this._initdefaultDate()
  },
  methods: {
    searchInfo() {
      if (this.dateValue === '' || !this.dateValue) {
        this.$message.error('查询项为空')
        return
      }
      this.loading = true
      if (this.totalValue !== 'total') {
        this.filterValue = ''
        this.initApiData(initCurrTime(0, 0, 0, this.dateValue), false)
      } else {
        this.filterValue = 'date_time'
        this.initApiData(initCurrTime(0, 0, 0, this.dateValue))
      }
    },
    _initdefaultDate() {
      const { timestamp } = timpstampToTime()
      const timestamp_day_1 = +timestamp - 1000 * 60 * 60 * 24
      this.dateValue = new Date(timestamp_day_1)
    },
    initApiData(dateValue, isDt = true) {
      getBehaviors(dateValue, this.totalValue).then(res => {
        this.totalOptions = getPosOptions(res.data)
        this.currTableData = initTableDataInDt(res.data, this.totalValue)
        if (!isDt) {
          this.secondaryData = secondaryData(res.data, this.totalValue)
        }
        if (this.currTableData.length === 0) {
          this.totalValue = 'total'
        }
        this.loading = false
      }).catch(err => {
        this.loading = false
        console.log(err)
        this.$notify({
          title: '未知错误',
          message: '请检查网络后刷新重试',
          type: 'error'
        })
      })
    }
  }
}

</script>

<style lang='scss' scoped>
.el-main{
  padding: {
    top: 10px;
    bottom: 10px;
  }
}
.el-main-1{
  padding-left: 0;
}
.table-margin{
  margin: {
    top:$normal_distance_size;
    bottom: $normal_distance_size;
  }
}
.btn-margin{
  margin-top: $normal_distance_size*2;
}
</style>
