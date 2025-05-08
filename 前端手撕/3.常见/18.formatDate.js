const padZero = (n) => {
  return (n+"").toString().padStart(2, '0')
}

const formatData = (time, format) => {
  const map = {
    YYYY:time.getFullYear(),
    MM:padZero(time.getMonth() + 1),
    DD: padZero(time.getDate()),
    HH: padZero(time.getHours()),
    MM: padZero(time.getMinutes()),
    SS:padZero(time.getSeconds())
  }
  return format.replace(/YYYY|MM|DD|HH|MM|SS/g, (match, expre) => {
    return map[match]
  })
}
const now = new Date()
console.log(formatData(now, "YYYY-MM-DD HH:MM:SS"));
