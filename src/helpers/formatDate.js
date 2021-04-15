export default function formatDate(input) {
  const rawDate = new Date(input);
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const year = rawDate.getFullYear();
  const month = months[rawDate.getMonth()];
  const date = rawDate.getDate();
  const hour = rawDate.getHours();
  const min = rawDate.getMinutes();
  const time = date + '/' + month + '/' + year + ' ' + (hour.toString().length === 1 ? `0${hour}` : hour) + ':' + (min.toString().length === 1 ? `0${min}` : min);
  return time;
}
