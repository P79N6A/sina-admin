import { devProxyApi, source } from '../index'
import service from '@/utils/axios'

function getBehaviors(dt, material_pos = '1', is_material = '1', limit = '10') {
  dt = JSON.stringify(dt)
  return service({
    url: `${devProxyApi}/4/data/dspActStat`,
    method: 'get',
    params: {
      source,
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
    url: `${devProxyApi}/4/data/dspActStat`,
    method: 'get',
    params: {
      source,
      dt,
      material_pos
    }
  })
}

export {
  getBehaviors,
  getChartBehaviors
}
