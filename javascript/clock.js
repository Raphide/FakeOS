const clock = document.getElementById("clockTop");
const clockDisp = document.getElementById("clockdisplay");

function nowTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const clockStr = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  const clockAppStr = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  clock.innerText = clockStr;
  clockDisp.innerText = clockAppStr;
}

nowTime();
setInterval(nowTime, 1000);
