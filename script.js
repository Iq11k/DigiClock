let jamSpan = document.getElementById("jam");
let menitSpan = document.getElementById("menit");
let detikSpan = document.getElementById("detik");
let dateSpan = document.getElementById("fullDate");

let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

setInterval(() => {
  let currentTime = new Date();
  let day = hari[currentTime.getDay()];
  let date =
    currentTime.getDate() > 9
      ? currentTime.getDate()
      : "0" + currentTime.getDate();
  let monthFix = currentTime.getMonth() + 1;
  let month = monthFix > 9 ? monthFix : "0" + monthFix;
  let hour =
    currentTime.getHours() > 9
      ? currentTime.getHours()
      : "0" + currentTime.getHours();
  let minute =
    currentTime.getMinutes() > 9
      ? currentTime.getMinutes()
      : "0" + currentTime.getMinutes();
  let second =
    currentTime.getSeconds() > 9
      ? currentTime.getSeconds()
      : "0" + currentTime.getSeconds();
  dateSpan.innerHTML =
    day +
    ", " +
    date +
    "/" +
    month +
    "/" +
    currentTime.getFullYear().toString().substr(-2);
  jamSpan.innerHTML = hour;
  menitSpan.innerHTML = minute;
  detikSpan.innerHTML = second;
}, 1000);
