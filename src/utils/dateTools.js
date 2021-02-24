'use strict'

function dateToString (date, format, temp) {
  if (!(date instanceof Date)) {
    console.warn('传入参数类型错误')
    return date
  }
  const year = date.getFullYear()
  let month = date.getMonth() + 1 // 返回的月份是从0~11的
  let day = date.getDate()
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

  month = month >= 10 ? month : '0' + month
  day = day >= 10 ? day : '0' + day

  const divider = temp || '.'

  switch (format) {
    case 'YYMMDD hh:mm:ss':
      return year + divider + month + divider + day + ' ' + hour + ':' + minute + ':' + second
    case 'YYMMDD hh:mm':
      return year + divider + month + divider + day + ' ' + hour + ':' + minute
    case 'MMDD hh:mm':
      return month + divider + day + ' ' + hour + ':' + minute
    case 'YYMMDD':
      return year + divider + month + divider + day
    case 'YY':
      return year
    case 'MMDD':
      return month + divider + day
    case 'hh:mm:ss':
      return hour + ':' + minute + ':' + second
    case 'hh:mm':
      return hour + ':' + minute
    case 'CreateLive' :
      return month + '月' + day + '日' + ' ' + hour + ':' + minute
    default :
      return year + divider + month + divider + day
  }
}

// 通过日期获取该日期的周次及该周的所有日期
function getWeekByDate (date) {
  if (!(date instanceof Date)) {
    console.warn('传入参数类型错误')
    return date
  }

  var oneDayLong = 24 * 60 * 60 * 1000 // 一天的的长度
  var time = date.getTime()
  var day = date.getDay()
  var sundayTime = ''
  var mondayTime = ''
  var tuesdayTime = ''
  var wednesdayTime = ''
  var thursdayTime = ''
  var fridayTime = ''
  var saturdayTime = ''
  if (day === 0) {
    sundayTime = time
    mondayTime = time - 6 * oneDayLong
    tuesdayTime = time - 5 * oneDayLong
    wednesdayTime = time - 4 * oneDayLong
    thursdayTime = time - 3 * oneDayLong
    fridayTime = time - 2 * oneDayLong
    saturdayTime = time - 1 * oneDayLong
  } else {
    mondayTime = time - (day - 1) * oneDayLong
    sundayTime = time + (7 - day) * oneDayLong
    tuesdayTime = time - (day - 2) * oneDayLong
    wednesdayTime = time - (day - 3) * oneDayLong
    thursdayTime = time - (day - 4) * oneDayLong
    fridayTime = time - (day - 5) * oneDayLong
    saturdayTime = time - (day - 6) * oneDayLong
  }

  var monday = new Date(mondayTime)
  var sunday = new Date(sundayTime)
  var tuesday = new Date(tuesdayTime)
  var wednesday = new Date(wednesdayTime)
  var thursday = new Date(thursdayTime)
  var friday = new Date(fridayTime)
  var saturday = new Date(saturdayTime)

  var week = {
    monday: dateToString(monday),
    tuesday: dateToString(tuesday),
    wednesday: dateToString(wednesday),
    thursday: dateToString(thursday),
    friday: dateToString(friday),
    saturday: dateToString(saturday),
    sunday: dateToString(sunday)
  }

  return week
}

exports.dateToString = dateToString
exports.getWeekByDate = getWeekByDate
