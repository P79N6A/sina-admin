<template>
  <el-container>
    <el-header class="header-text-line-height h1-font header-bottom-border">
      覆盖率统计
    </el-header>
    <el-main>
      <el-select v-model="fieldValue" placeholder="请选择">
        <el-option
          v-for="item in fieldOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-row class="common-container top-radius">
        <el-col :span="24">
          <panel-top title="覆盖率统计查询结果" />
          <el-row>
            <el-col :span="4" :offset="1">
              <el-container>
                <el-main class="bold-weight-font">
                  每页显示：
                </el-main>
                <el-footer>
                  <el-select v-model="paginationValue" placeholder="请选择" size="small">
                    <el-option
                      v-for="item in paginationOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-footer>
              </el-container>
            </el-col>
            <el-col :span="6" :offset="4">
              <el-container>
                <el-main class="bold-weight-font">
                  查询：
                </el-main>
                <el-footer>
                  <el-input v-model="filterValue" placeholder="请输入内容" size="small">
                    <template slot="prepend">field</template>
                  </el-input>
                </el-footer>
              </el-container>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <data-table :field-value="fieldValue" :filter-value="filterValue" :pagination-value="paginationValue" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import DataTable from './components/data-table'
import PanelTop from '@/components/PanelTop/index'
export default {
  name: 'CoverageStatistics',
  components: {
    DataTable, PanelTop
  },
  data() {
    return {
      fieldOptions: [//  field筛选域
        {
          value: 'date_time',
          label: 'date_time'
        }, {
          value: 'task_id',
          label: 'task_id'
        }
      ],
      fieldValue: 'task_id',
      paginationOptions: [// 分页数量筛选
        {
          value: 10,
          label: 10
        },
        {
          value: 25,
          label: 25
        },
        {
          value: 50,
          label: 50
        },
        {
          value: 100,
          label: 100
        }
      ],
      paginationValue: 50, // 分页数量
      filterValue: '' // 数据筛选
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
