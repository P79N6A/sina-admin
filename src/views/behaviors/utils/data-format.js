const sendMap = {
  product: 'send_prod',
  uv: 'send_uv',
  pv: 'send_pv'
}
const actionMap = {
  product: 'action_prod',
  uv: 'action_uv',
  pv: 'action_pv'
}

const propArrInDt = ['action_statistic', 'send_statistic']
const propMapArrInDt = [actionMap, sendMap]

function getPosOptions(dataFrom) {
  const res = []
  if (Object.keys(dataFrom.data).length === 0) {
    return res
  }
  const dataSource = []
  Object.keys(dataFrom.data).forEach(item => {
    dataSource.push({
      date_time: item,
      value: dataFrom.data[item]
    })
  })
  dataSource[0].value.material_pos.forEach(item => {
    res.push({
      label: item + '',
      value: item + ''
    })
  })
  return res
}

function initTableDataInDt(dataFrom, key) {
  const res = []
  if (Object.keys(dataFrom.data).length === 0) {
    return res
  }
  let index = 0
  Object.keys(dataFrom.data).forEach(item => {
    res.push({
      date_time: item
    })
    const currObj = dataFrom.data[item]
    for (let i = 0; i < propArrInDt.length; i++) {
      Object.keys(currObj[propArrInDt[i]][key]).forEach(item => {
        res[index][propMapArrInDt[i][item]] = currObj[propArrInDt[i]][key][item]
      })
    }
    index++
  })
  return res
}

function secondaryData(dataFrom, key) {
  const res = []

  if (Object.keys(dataFrom.data).length === 0) {
    return res
  }
  const data = dataFrom.data
  Object.keys(data).forEach(item => {
    res.push({
      date_time: item
    })
  })
  for (let i = 0; i < res.length; i++) {
    const currObj = data[res[i]['date_time']]['material_statistic'][key]
    Object.keys(currObj).forEach(item => {
      Object.keys(currObj[item]).forEach(item_1 => {
        res[i][`${item}_${item_1}`] = currObj[item][item_1]
      })
    })
  }
  return res
}

function initChartsData(dataFrom) {
  const todayRes = []
  const posRes = []
  const legends = []// 素材位图例
  if (dataFrom.errcode || Object.keys(dataFrom.data).length === 0) {
    return {
      posRes,
      todayRes,
      legends
    }
  }
  const data = dataFrom.data
  const firstKey = Object.keys(data)[0]
  const legendsObj = data[firstKey]['action_statistic']
  Object.keys(legendsObj).forEach(item => {
    legends.push(item)
  })
  Object.keys(data).sort().forEach((item1, index1) => {
    const trulyTime = _timeKeyFormat(item1)
    console.log(trulyTime)
    todayRes.push([trulyTime])
    posRes.push([trulyTime])
    const data_second = data[item1]['action_statistic']
    Object.keys(data_second).forEach(item2 => {
      todayRes[index1].push(data_second[item2]['today'] ? data_second[item2]['today'] : 0)
      posRes[index1].push(data_second[item2]['10p'] ? data_second[item2]['10p'] : 0)
    })
  })
  return {
    posRes,
    todayRes,
    legends
  }
}

function _timeKeyFormat(str) {
  const arr = str.split('')
  return `${arr[0]}${arr[1]}:${arr[2]}${arr[3]}`
}

export {
  getPosOptions,
  initTableDataInDt,
  secondaryData,
  initChartsData
}
