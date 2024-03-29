import { devProxyApi, cip } from '../index'
import service from '@/utils/axios'

function getBehaviors(dt, material_pos = '1', is_material = '1', limit = '10') {
  dt = JSON.stringify(dt)
  return service({
    url: `${devProxyApi}/Dsp_data/dspActStat`,
    method: 'get',
    params: {
      cip,
      dt,
      material_pos,
      is_material,
      limit
    }
  })
}

function getChartBehaviors(dt, material_pos = 'real_time@all') {
  dt = JSON.stringify(dt)
  return service({
    url: `${devProxyApi}/Dsp_data/dspActStat`,
    method: 'get',
    params: {
      cip,
      dt,
      material_pos
    }
  })
}

export {
  getBehaviors,
  getChartBehaviors
}
