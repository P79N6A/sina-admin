import { initCurrTime } from '@/utils/date'

function coverageFormat(data) {
  const { dsp_monitor_task } = data.data
  const { dsp_monitor_day } = data.data
  /* 覆盖率统计 */
  let coverages_task_id = []// 覆盖率数据taskid
  let coverages_day = []// 覆盖率数据date

  coverages_task_id = getField(dsp_monitor_task)
  coverages_day = getField(dsp_monitor_day)
  coverages_task_id.forEach(item => {
    Object.assign(item, dsp_monitor_task[item.field]['coverage'])
  })
  coverages_day.forEach(item => {
    Object.assign(item, dsp_monitor_day[item.field]['coverage'])
  })

  function getField(dataFrom) {
    const res = []
    let index = 1
    Object.keys(dataFrom).forEach(item => {
      res.push({
        field: item,
        index: index++
      })
    })
    return res
  }

  return {
    coverages_task_id,
    coverages_day
  }
}

function passiveOptinsFormat(data) {
  const res = []
  if (data) {
    data = data.split(',')
    data.forEach(item => {
      res.push({
        value: item,
        lable: item
      })
    })
  }
  return res
}

function setDateArray(data) {
  const res = []
  data.forEach(item => {
    res.push(initCurrTime(0, 0, 0, item))
  })
  return JSON.stringify(res)
}

function formatChartsData(key, dataFrom, xAliasName) {
  const keyMap = {
    'task_id': 'dsp_monitor_task',
    'date_time': 'dsp_monitor_day'
  }
  const data = dataFrom['data'][keyMap[key]]
  const uidCountMap = []
  Object.keys(data).forEach(item => {
    uidCountMap.push({
      key: item,
      uid_count: data[item]['uid_count']
    })
  })

  const length = Array.from(Object.keys(data)).length// 数据数
  const chartsMap = []

  /* 收集第一级legends */
  const legends = []
  Object.keys(data).forEach(item => {
    legends.push(item)
  })

  /* 收集key值 */
  const keys = []
  const exKey = uidCountMap[0].key + ''
  Object.keys(data[exKey][xAliasName]).forEach(item => {
    keys.push(item)
    chartsMap.push([item])
  })

  for (let i = 0; i < length; i++) {
    const currObj = data[uidCountMap[i].key][xAliasName]
    for (let j = 0; j < keys.length; j++) {
      chartsMap[j].push(currObj[keys[j]])
    }
  }

  return {
    chartsMap, // 图表绘制数据源
    uidCountMap, // uid_count映射
    legends
  }
}
export {
  coverageFormat,
  passiveOptinsFormat,
  setDateArray,
  formatChartsData
}

