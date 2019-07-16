function coverageFormat(data) {
  const { dsp_monitor_task } = data
  const { dsp_monitor_day } = data

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
  data = data.split(',')
  data.forEach(item => {
    res.push({
      value: item,
      lable: item
    })
  })
  return res
}

export {
  coverageFormat,
  passiveOptinsFormat
}

