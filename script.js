//TIME
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
// AM PM AND HRS DIGIT CHANGE
let am = document.getElementById("am");

if (hrs == 0) {
  hrs = 12;
}

if (hrs > 12) {
  hrs = hrs - 12;
  am = "PM";
}
//MONTH
let Month = document.getElementById("mon");

let a = new Date();
Month.innerHTML = a.toDateString();
