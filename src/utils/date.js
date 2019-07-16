function initCurrTime(_ = new Date()) {
  const currMonth = (_.getMonth() + 1) < 10 ? `0${_.getMonth() + 1}` : (_.getMonth() + 1)
  const currDay = _.getDate() < 10 ? `0${_.getDate()}` : (_.getDate())
  return `${_.getFullYear()}${currMonth}${currDay}`
}

export {
  initCurrTime
}
