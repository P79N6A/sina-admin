function initCurrTime(diffYear = 0, diffMonth = 0, diffDay = 0, _ = new Date()) {
  const currMonth = (_.getMonth() + 1 + diffMonth) < 10 ? `0${_.getMonth() + 1}` : (_.getMonth() + 1 + diffMonth)
  const currDay = (_.getDate() + diffDay) < 10 ? `0${_.getDate()}` : (_.getDate() + diffDay)
  return `${_.getFullYear() + diffYear}${currMonth}${currDay}`
}

function get_hour_minute() { // 时间段专用
  const _ = new Date()
  const h = _.getHours() < 10 ? `0${_.getHours()}` : _.getHours()
  const m = _.getMinutes() < 10 ? `00` : _.getMinutes()
  return `${h}:${m}`
}

function timpstampToTime(timestamp) {
  const _ = timestamp ? new Date(timestamp) : new Date()
  return {
    timestamp: Date.parse(_),
    year: _.getFullYear(),
    month: (_.getMonth() + 1) < 10 ? `0${_.getMonth() + 1}` : _.getMonth() + 1,
    day: _.getDate() < 10 ? `0${_.getDate()}` : _.getDate(),
    hour: _.getHours() < 10 ? `0${_.getHours()}` : _.getHours(),
    minute: _.getMinutes() < 10 ? `0${_.getMinutes()}` : _.getMinutes(),
    second: _.getSeconds() < 10 ? `0${_.getSeconds()}` : _.getSeconds()
  }
}

export {
  initCurrTime,
  get_hour_minute,
  timpstampToTime
}
