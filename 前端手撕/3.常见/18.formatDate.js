/*test*/
function padZero(num) {
  return (num + "").toString().padStart(2, "0");
}

function formatData(date, format) {
  const map = {
    YYYY: date.getFullYear(),
    MM: padZero(date.getMonth() + 1),
    DD: padZero(date.getDate()),
    HH: padZero(date.getMinutes()),
    SS: padZero(date.getSeconds()),
  };

  return format.replace(/YYYY|MM|DD|HH|MM|SS/g, (match, expre) => {
    return map[match];
  });
}

const now = new Date();

console.log(formatData(now, "YYYY-MM-DD MM:SS"));
