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
        <el-col :span="4" :offset="1">
          <el-select v-model="passiveValue" placeholder="请选择" size="small">
            <el-option
              v-for="item in passiveOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
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
              <panel-top title="数据分布展示">
                <template v-slot:count>
                  <uid-count-panel :uid-count="currUidCount" />
                </template>
              </panel-top>
            </el-col>
          </el-row>
          <el-row v-loading="loading">
            <el-col :span="24">
              <charts-data :curr-charts-data="currChartsData" :x-name="extraValue" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import { passiveOptinsFormat } from './utils/data-format'
import { getTaskChartsData, getPassiveOptions, getDateChartsData } from '@/apis/purchases/index'
import ChartsData from './components/charts-data'
import PanelTop from '@/components/PanelTop'
import UidCountPanel from '@/components/UidCountPanel/index'
export default {
  name: 'DataDistribution',
  components: {
    ChartsData, PanelTop, UidCountPanel
  },
  data() {
    return {
      loading: false,
      fieldOptions: [// field筛选
        {
          value: 'task_id',
          label: 'task_id'
        },
        {
          value: 'date_time',
          label: 'date_time'
        }
      ],
      passiveOptions: [], // passive筛选
      extraOptions: [
        {
          value: 'cat_ids',
          label: 'cat_ids'
        },
        {
          value: 'city_level',
          label: 'city_level'
        },
        {
          value: 'obj_ids',
          label: 'obj_ids'
        },
        {
          value: 'user_type_id',
          label: 'user_type_id'
        },
        {
          value: 'reg_time',
          label: 'reg_time'
        },
        {
          value: 'gender',
          label: 'gender'
        },
        {
          value: 'age',
          label: 'age'
        },
        {
          value: 'tag_ids',
          label: 'tag_ids'
        },
        {
          value: 'value',
          label: 'value'
        }
      ],
      passiveMap: {
        'task_id': [],
        'date_time': []
      },
      fieldValue: 'task_id',
      passiveValue: '', // passive默认值
      extraValue: 'cat_ids', // extra默认值
      currChartsData: null, // 当前查询项下的图表数据源
      currUidCount: '0'// current uid_count
    }
  },
  watch: {
    fieldValue(newValue) {
      this.passiveOptions = this.passiveMap[newValue]
      this.passiveValue = this.passiveOptions[0].value
    }
  },
  created() {
    this._initApiData()
  },
  methods: {
    searchTargetValue() { // 选中项数据查询
      this.loading = true
      if (this.fieldValue === 'task_id') {
        getTaskChartsData(this.passiveValue, this.extraValue).then(res => {
          this.currChartsData = res.data.dsp_monitor_task[this.passiveValue][this.extraValue]
          this.currUidCount = res.data.dsp_monitor_task[this.passiveValue].uid_count + ''
          this.loading = false
        })
      } else {
        getDateChartsData(this.passiveValue, this.extraValue).then(res => {
          this.currChartsData = res.data.dsp_monitor_day[this.passiveValue][this.extraValue]
          this.currUidCount = res.data.dsp_monitor_day[this.passiveValue].uid_count + ''
          this.loading = false
        })
      }
    },
    _initDefaultValues() { // 首次渲染选择器options默认值init
      this.passiveValue = this.passiveOptions[0].value
      this.extraValue = this.extraOptions[0].value
      this.searchTargetValue()
    },
    _initApiData() { // 数据请求处理
      getPassiveOptions().then(res => {
        const { taskIds, dts } = res.data
        this.passiveMap['task_id'] = passiveOptinsFormat(taskIds)
        this.passiveMap['date_time'] = passiveOptinsFormat(dts)
        this.passiveOptions = this.passiveMap[this.fieldValue]
        this._initDefaultValues()
      })
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
