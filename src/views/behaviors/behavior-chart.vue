<template>
  <el-container>
    <el-header class="header-text-line-height h1-font header-bottom-border">用户行为</el-header>
    <el-main>
      <el-row>
        <el-col :span="18">
          <el-container>
            <el-main class="h2-font bold-weight-font">
              选取时间段：
            </el-main>
            <el-footer>
              <el-select v-model="filterValue" placeholder="请选择">
                <el-option
                  v-for="item in filterOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <el-date-picker
                v-show="filterValue==='time_point'"
                v-model="dateValue_s"
                type="datetime"
                placeholder="开始时间"
              />
              <span v-show="filterValue==='time_point'">到</span>
              <el-date-picker
                v-show="filterValue==='time_point'"
                v-model="dateValue_e"
                type="datetime"
                placeholder="结束时间"
              />
              <el-select v-show="filterValue!=='time_point'" v-model="rangeValue" placeholder="请选择">
                <el-option
                  v-for="item in rangeOptions"
                  :key="item.value"
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
      <el-row v-loading="loading" class="common-container top-radius">
        <el-col :span="24">
          <panel-top title="用户行为数据查询结果" />
          <el-row v-if="isDataInit" class="charts-margin">
            <el-col :span="22" :offset="1">
              <Histogram
                :source="posSourceData"
                x-axis-name="time_range"
                chart-id="10p"
                :legends="legends"
                graphics="line"
                title="10p数据展示"
                :legends-controller="legendsController"
              />
            </el-col>
          </el-row>
          <el-row v-if="isDataInit" class="charts-margin">
            <el-col :span="22" :offset="1">
              <Histogram
                :source="todaySourceData"
                x-axis-name="time_range"
                chart-id="today"
                :legends="legends"
                graphics="line"
                title="today数据展示"
                :legends-controller="legendsController"
              />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import PanelTop from '@/components/PanelTop/index'
import Histogram from '@/components/Charts/Histogram'
import { getChartBehaviors } from '@/apis/behaviors/index'
import { initChartsData } from './utils/data-format'
import { timpstampToTime } from '@/utils/date'
import { filterOptions, rangeOptions } from './utils/settings'
export default {
  name: 'BehaviorChart',
  components: {
    PanelTop, Histogram
  },
  data() {
    return {
      dateValue_s: '',
      dateValue_e: '',
      range_dateValue_s: '',
      range_dateValue_e: '',
      filterValue: 'time_point',
      rangeValue: 'four_hour',
      legends: [], // 图例列表
      posSourceData: [], // pos图表源数据
      todaySourceData: [], // today图表数据源
      isDataInit: false,
      loading: false,
      legendsController: {},
      filterOptions,
      rangeOptions
    }
  },
  created() {
    this._initDefaultTime()
    this.searchInfo()
  },
  methods: {
    searchInfo() {
      if (this.filterValue === 'time_point') {
        if (!this.dateValue_s || !this.dateValue_e || this.dateValue_s === '' || this.dateValue_e === '') {
          this.$message.error('查询项存在空项')
          return false
        }
        if (!this._dateValueCheck()) {
          this.$message.error('请保证开始日期小于结束日期')
          return false
        }
        this._initApiData({
          start_time: +this.dateValue_s / 1000,
          end_time: +this.dateValue_e / 1000
        })
      } else {
        this._initRangeDateValue(this.rangeValue)
        this._initApiData({
          start_time: Math.round(+this.range_dateValue_s / 1000),
          end_time: Math.round(+this.range_dateValue_e / 1000)
        })
      }
    },
    _initRangeDateValue(key) {
      const currrent = timpstampToTime().timestamp
      this.range_dateValue_e = currrent
      if (key === 'four_hour') {
        this.range_dateValue_s = currrent - 60 * 60 * 4 * 1000
      }
      if (key === 'full_day') {
        this.range_dateValue_s = currrent - 86400 * 1000
      }
      if (key === 'yeater_fullday') {
        const { year, month, day } = timpstampToTime()
        const currDayObj = new Date(+year, +month - 1, +day)
        this.range_dateValue_e = +currDayObj
        this.range_dateValue_s = (+currDayObj) - 86400 * 1000
      }
      if (key === 'full_week') {
        this.range_dateValue_s = currrent - 86400 * 7 * 1000
      }
      if (key === 'full_month') {
        this.range_dateValue_s = currrent - 86400 * 30 * 1000
      }
    },
    _initApiData(dateValue) {
      this.loading = true
      getChartBehaviors(dateValue).then(res => {
        const formatData = initChartsData(res.data)
        this.legends = formatData.legends
        this.posSourceData = formatData.posRes
        this.todaySourceData = formatData.todayRes
        this._initLegendsController()
        this.isDataInit = true
        this.loading = false
      }).catch(err => {
        console.error(err)
        this.$notify({
          title: '未知错误',
          message: '请检查网络后刷新重试',
          type: 'error'
        })
        this.loading = false
      })
    },
    _initLegendsController() {
      this.legends.forEach(item => {
        this.legendsController[item] = false
      })
      this.legendsController[this.legends[0]] = true
    },
    _dateValueCheck() {
      if (+this.dateValue_s > +this.dateValue_e) {
        return false
      }
      return true
    },
    _initDefaultTime() {
      const { timestamp, year, month, day } = timpstampToTime()
      const today_start = +new Date(+year, +month - 1, +day)
      const today_res = timpstampToTime(today_start)
      this.dateValue_s = today_res.timestamp
      this.dateValue_e = timestamp
    }
  }
}

</script>

<style lang='scss' scoped>
.btn-margin{
  margin-top: $normal_distance_size*3;
}
.charts-margin{
  margin-top: $normal_distance_size*2;
}
</style>
