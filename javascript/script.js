const home = document.getElementById("home");
const calcapp = document.getElementById("app app--calc");
const calculator = document.querySelector(".calculator");
const clock = document.getElementById("clockTop");
const clockMod = document.querySelector(".clock");
const clockDisp = document.getElementById("clockdisplay");
const clockApp = document.getElementById("app app--clock");
const notes = document.querySelector(".notes");
const notesApp = document.getElementById("app app--notes");
const phone = document.getElementById("phonemenu");
const phoneApp = document.getElementById("app app--phonebook");
const list = document.getElementById("appslist");
const listApp = document.getElementById("app app--list");

/// Clock
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
///===========================================

///App buttons===============================
home.addEventListener("click", () => {
  calculator.classList.remove("show");
  notes.classList.remove("show");
  clockMod.classList.remove("show");
});

calcapp.addEventListener("click", () => {
  calculator.classList.add("show");
});

notesApp.addEventListener("click", () => {
notes.classList.add("show");
});


clockApp.addEventListener("click", () => {
  clockMod.classList.add("show");
});
///===============================
 // menu buttons================================
 phoneApp.addEventListener("click", () => {
  phone.classList.toggle("show");
 });

 listApp.addEventListener("click", () => {
  list.classList.toggle("show");
 })

