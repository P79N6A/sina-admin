import service from '@/utils/axios'
// const devProxyApi = '/weibo'

function getCoverageData() {
  return service({
    url: '/4/data/dspFeaDataStat',
    method: 'get',
    params: {
      cip: 230,
      source: '3567320871234567890',
      type: 'coverage',
      taskIds: 'all',
      dts: 'all'
    }
  })
}

/**
 *提供参数查询
 *
 * @param {*} taskId
 * @param {*} dt
 * @returns
 */
function getTaskChartsData(taskId, type) {
  const taskData = []
  taskData[0] = taskId + ''
  const taskIds = JSON.stringify(taskData)
  return service({
    url: '/4/data/dspFeaDataStat',
    method: 'get',
    params: {
      cip: 230,
      source: '3567320871234567890',
      type,
      taskIds,
      dts: '[]'
    }
  })
}

function getDateChartsData(dt, type) {
  const dtsData = []
  dtsData[0] = dt + ''
  const dts = JSON.stringify(dtsData)
  return service({
    url: '/4/data/dspFeaDataStat',
    method: 'get',
    params: {
      cip: 230,
      source: '3567320871234567890',
      type,
      taskIds: '[]',
      dts
    }
  })
}

function getPassiveOptions() {
  return service({
    url: '/4/data/dspFeaDataStat',
    method: 'get',
    params: {
      source: '3567320871234567890',
      cip: 230,
      taskIds: '[]',
      dts: '[]',
      type: 'all',
      isTaskIds: true,
      isDts: true
    }
  })
}

export {
  getCoverageData,
  getTaskChartsData,
  getPassiveOptions,
  getDateChartsData
}
