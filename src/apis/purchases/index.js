import service from '@/utils/axios'
import { devProxyApi, source, cip } from '../index'

function getCoverageData() {
  return service({
    url: `${devProxyApi}/Dsp_data/dspFeaDataStat`,
    method: 'get',
    params: {
      cip,
      source,
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
    url: `${devProxyApi}/Dsp_data/dspFeaDataStat`,
    method: 'get',
    params: {
      cip,
      source,
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
      source,
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
      source,
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
