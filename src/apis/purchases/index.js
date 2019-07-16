import service from '@/utils/axios'
const devProxyApi = ''

function getCoverageData() {
  return service({
    url: `${devProxyApi}/4/data/dspFeaDataStat`,
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
function getTaskChartsData(taskIds, type) {
  return service({
    url: `${devProxyApi}/4/data/dspFeaDataStat`,
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

function getDateChartsData(dts, type) {
  return service({
    url: `${devProxyApi}/4/data/dspFeaDataStat`,
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
    url: `${devProxyApi}/4/data/dspFeaDataStat`,
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
