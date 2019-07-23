const tableOptionsCommon = [
  {
    prop: 'date_time',
    label: '日期'
  },
  {
    prop: 'send_pv',
    label: '下发pv'
  },
  {
    prop: 'send_uv',
    label: '下发uv'
  },
  {
    prop: 'send_prod',
    label: '下发素材'
  },
  {
    prop: 'action_pv',
    label: '点击pv'
  },
  {
    prop: 'action_uv',
    label: '点击uv'
  },
  {
    prop: 'action_prod',
    label: '点击素材'
  }
]
const secondaryOptions = [
  {
    prop: '10p',
    label: '10p'
  },
  {
    prop: '50p',
    label: '50p'
  },
  {
    prop: '90p',
    label: '90p'
  },
  {
    prop: 'av',
    label: 'av'
  }
]
const filterOptions = [
  {
    value: 'time_point',
    label: '精确查找'
  }, {
    value: 'time_range',
    label: '范围查找'
  }
]

const rangeOptions = [
  {
    value: 'four_hour',
    label: '最近四小时'
  }, {
    value: 'full_day',
    label: '最近一天'
  },
  {
    value: 'yeater_fullday',
    label: '昨天'
  },
  {
    value: 'full_week',
    label: '最近一周'
  },
  {
    value: 'full_month',
    label: '最近一个月'
  }
]

export {
  tableOptionsCommon,
  secondaryOptions,
  filterOptions,
  rangeOptions
}

