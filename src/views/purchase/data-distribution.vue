<template>
  <el-container>
    <el-header class="header-text-line-height h1-font header-bottom-border">数据分析展示</el-header>
    <el-main>
      <el-row>
        <el-col :span="3">
          <el-select v-model="fieldValue" placeholder="请选择" size="small">
            <el-option
              v-for="item in fieldOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="8" :offset="1">
          <el-select
            v-show="fieldValue==='task_id'"
            v-model="passiveValue"
            style="width:100%;"
            multiple
            :multiple-limit="5"
            placeholder="请选择"
            size="small"
          >
            <el-option
              v-for="item in passiveOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-date-picker
            v-show="fieldValue!=='task_id'"
            v-model="dateValue"
            type="dates"
            format="yyyyMMdd"
            placeholder="选择一个或多个日期"
            style="width:90%;"
            :default-value="new Date()"
            size="small"
            @change="change"
          />
        </el-col>
        <el-col :span="3" :offset="1">
          <el-select v-model="extraValue" placeholder="请选择" size="small">
            <el-option
              v-for="item in extraOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="2" :offset="2" @click.native="searchTargetValue">
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="common-container top-radius">
          <el-row>
            <el-col :span="24">
              <panel-top title="数据分布展示" />
            </el-col>
          </el-row>
          <el-row v-loading="loading">
            <el-col :span="24">
              <charts-data :curr-charts-data="currChartsData" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import { passiveOptinsFormat, setDateArray, formatChartsData } from './utils/data-format'
import { getTaskChartsData, getPassiveOptions, getDateChartsData } from '@/apis/purchases/index'
import { extraOptions, fieldOptions } from './utils/settings'
import { initCurrTime } from '@/utils/date'
import ChartsData from './components/charts-data'
import PanelTop from '@/components/PanelTop'
export default {
  name: 'DataDistribution',
  components: {
    ChartsData, PanelTop
  },
  data() {
    return {
      loading: false,
      fieldOptions,
      passiveOptions: [], // passive筛选
      extraOptions,
      fieldValue: 'task_id',
      dateValue: [], // date默认值
      passiveValue: [], // passive默认值
      extraValue: 'cat_ids', // extra默认值
      currChartsData: null // 当前查询项下的图表数据源
    }
  },
  watch: {
    dateValue(newValue) {
      if (newValue.length > 5) {
        this.dateValue.length = 5
        this.$notify({
          title: '非法输入',
          message: '最多同时显示五天的数据',
          type: 'warning'
        })
      }
    }
  },
  created() {
    this._initApiData()
  },
  methods: {
    change() {
      const currTime = initCurrTime()
      this.dateValue = this.dateValue.filter(item => !(initCurrTime(item) > currTime))
    },
    searchTargetValue() { // 选中项数据查询
      if (this.fieldValue === 'task_id') {
        if (this.passiveValue.length === 0) {
          this.$message.error('task_id筛选项为空')
          return
        }
        if (this.passiveValue.length > 5) {
          this.$message.error('最多同时展示5条数据')
          return
        }
        this.loading = true
        const res = JSON.stringify(this.passiveValue)
        getTaskChartsData(res, this.extraValue).then(res => {
          const formatData = formatChartsData('task_id', res.data, this.extraValue)
          this.currChartsData = formatData
          this.loading = false
        }).catch(err => {
          console.error(err)
          this.loading = false
          this.$notify({
            message: '请检查网络后重试'
          })
        })
      } else { //    -->date_time数据
        if (this.dateValue.length === 0) {
          this.$message.error('date_time筛选项为空')
          return
        }
        this.loading = true
        const res = setDateArray(this.dateValue)
        getDateChartsData(res, this.extraValue).then(res => {
          const formatData = formatChartsData('date_time', res.data, this.extraValue)
          this.currChartsData = formatData
          this.loading = false
        }).catch(err => {
          console.error(err)
          this.loading = false
          this.$notify({
            message: '请检查网络后重试'
          })
        })
      }
    },
    _initDefaultValues() { // 首次渲染选择器options默认值init
      this.passiveValue = [this.passiveOptions[0].value]
      this.extraValue = this.extraOptions[0].value
      this.searchTargetValue()
    },
    _initApiData() { // 数据请求处理
      getPassiveOptions().then(res => {
        const { taskIds } = res.data
        this.passiveOptions = passiveOptinsFormat(taskIds)
        this._initDefaultValues()
      })
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
