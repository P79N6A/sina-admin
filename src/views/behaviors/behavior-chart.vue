<template>
  <el-container>
    <el-header class="header-text-line-height h1-font header-bottom-border">用户行为</el-header>
    <el-main>
      <el-row>
        <el-col :span="14">
          <el-container>
            <el-main class="h2-font bold-weight-font">
              选取时间段：
            </el-main>
            <el-footer>
              <el-time-select
                v-model="startTime"
                placeholder="起始时间"
                :picker-options="optionsCommon"
              />&nbsp;到&nbsp;
              <el-time-select
                v-model="endTime"
                placeholder="结束时间"
                :picker-options="{
                  ...optionsCommon,
                  minTime:startTime
                }"
              />
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
                x-axis-name="timer"
                chart-id="pos"
                :legends="legends"
                graphics="line"
                title="10p数据展示"
              />
            </el-col>
          </el-row>
          <el-row v-if="isDataInit" class="charts-margin">
            <el-col :span="22" :offset="1">
              <Histogram
                :source="todaySourceData"
                x-axis-name="timer"
                chart-id="today"
                :legends="legends"
                graphics="line"
                title="today数据展示"
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
import { get_hour_minute } from '@/utils/date'
import { getChartBehaviors } from '@/apis/behaviors/index'
import { initChartsData } from './utils/data-format'
import { timpstampToTime } from '@/utils/date'
export default {
  name: 'BehaviorChart',
  components: {
    PanelTop, Histogram
  },
  data() {
    return {
      startTime: '',
      endTime: '',
      optionsCommon: {
        start: '00:00',
        step: '00:10',
        end: ''
      },
      legends: [], // 图例列表
      posSourceData: [], // pos图表源数据
      todaySourceData: [], // today图表数据源
      isDataInit: false,
      loading: false
    }
  },
  created() {
    this._initEndTime()
    this.searchInfo()
  },
  methods: {
    searchInfo() {
      this.loading = true
      const { year, month, day } = timpstampToTime()
      const end_h = this._formatTimeKey(this.endTime).hour
      const end_m = this._formatTimeKey(this.endTime).minute
      const start_h = this._formatTimeKey(this.startTime).hour || this._getDefaultStartTime(end_h, end_m).start_h
      const start_m = this._formatTimeKey(this.startTime).minute || this._getDefaultStartTime(end_h, end_m).start_m
      const _s = new Date(+year, +month - 1, +day, +start_h, +start_m)
      const _e = new Date(+year, +month - 1, +day, +end_h, +end_m)
      getChartBehaviors({
        start_time: Date.parse(_s) / 1000,
        end_time: Date.parse(_e) / 1000
      }).then(res => {
        const formatData = initChartsData(res.data)
        this.legends = formatData.legends
        this.posSourceData = formatData.posRes
        this.todaySourceData = formatData.todayRes
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
    _getDefaultStartTime(end_h, end_m) {
      let start_h = ''
      let start_m = ''
      if (+end_m - 20 < 0) {
        start_m = 60 - 20
        start_h = end_h - 1 < 10 ? `${end_h - 1}` : end_h - 1
      } else {
        start_m = +end_m - 20
        start_h = end_h
      }
      console.log({
        start_h,
        start_m
      })
      return {
        start_h,
        start_m
      }
    },
    _initEndTime() {
      const res = get_hour_minute()
      this.optionsCommon.end = res
      this.endTime = this._formatEndTime(res)
    },
    _formatEndTime(str) {
      const arr = str.split('')
      arr[arr.length - 1] = '0'
      return arr.join('')
    },
    _formatTimeKey(str) {
      const arr = str.split(':')
      return {
        hour: arr[0],
        minute: arr[1]
      }
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
