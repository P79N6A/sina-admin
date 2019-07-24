import service from '@/utils/axios'
import { devProxyApi, cip } from '../index'

function getCoverageData() {
  return service({
    url: `${devProxyApi}/Dsp_data/dspFeaDataStat`,
    method: 'get',
    params: {
      cip,
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
      type,
      taskIds,
      dts: '[]'
    }
  })
}

function getDateChartsData(dts, type) {
  return service({
    url: `${devProxyApi}/Dsp_data/dspFeaDataStat`,
    method: 'get',
    params: {
      cip,
      type,
      taskIds: '[]',
      dts
    }
  })
}

function getPassiveOptions() {
  return service({
    url: `${devProxyApi}/Dsp_data/dspFeaDataStat`,
    method: 'get',
    params: {
      cip,
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
