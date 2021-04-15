export default function formatDate(input) {
  const a = new Date(input);
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const time = date + '/' + month + '/' + year + ' ' + (hour.toString().length === 1 ? `0${hour}` : hour) + ':' + (min.toString().length === 1 ? `0${min}` : min);
  return time;
}
