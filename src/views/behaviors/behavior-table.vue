<template>
  <el-container>
    <el-header class="header-text-line-height h1-font header-bottom-border">
      用户行为
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="10">
          <el-container>
            <el-main class="bold-weight-font el-main-1">
              date_time:
            </el-main>
            <el-footer class="el-main-1">
              <el-date-picker
                v-model="dateValue"
                class="width-banner"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
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
import { timpstampToTime } from '@/utils/date'
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
    this._initdefaultDate()
    this.initApiData(this._initDtParams())
  },
  methods: {
    searchInfo() {
      if (!this.dateValue || this.dateValue.length !== 2) {
        this.$message.error('查询项存在空项')
        return
      }
      if (!this._checkDtParams()) {
        console.log(this._checkDtParams())
        this.$message.error('仅支持查询包含前一天的数据')
        this.dateValue.length = 0
        return false
      }
      this.loading = true
      if (this.totalValue !== 'total') {
        this.filterValue = ''
        this.initApiData(this._initDtParams(), false)
      } else {
        this.filterValue = 'date_time'
        this.initApiData(this._initDtParams())
      }
    },
    _initDtParams() {
      return {
        start_time: `${timpstampToTime(+this.dateValue[0]).year}${timpstampToTime(+this.dateValue[0]).month}${timpstampToTime(+this.dateValue[0]).day}`,
        end_time: `${timpstampToTime(+this.dateValue[1]).year}${timpstampToTime(+this.dateValue[1]).month}${timpstampToTime(+this.dateValue[1]).day}`
      }
    },
    _checkDtParams() {
      const sameDayStamp = timpstampToTime().timestamp
      for (let i = 0; i < 2; i++) {
        if (+this.dateValue[i] > sameDayStamp) {
          return false
        }
      }
      return true
    },
    _initdefaultDate() {
      const { timestamp } = timpstampToTime()
      const timestamp_week_1 = +timestamp - 7000 * 60 * 60 * 24
      const timestamp_day_1 = +timestamp - 1000 * 60 * 60 * 24
      this.dateValue = [new Date(timestamp_week_1), new Date(timestamp_day_1)]
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
.width-banner{
  width: 90%;
}
</style>
