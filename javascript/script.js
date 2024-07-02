const home = document.getElementById("home");
const calcapp = document.getElementById("app app--calc");
const calculator = document.querySelector(".calculator");
const clockMod = document.querySelector(".clock");
const clockApp = document.getElementById("app app--clock");
const notes = document.querySelector(".notes");
const notesApp = document.getElementById("app app--notes");
const phone = document.getElementById("phonemenu");
const phoneApp = document.getElementById("app app--phonebook");
const list = document.getElementById("appslist");
const listApp = document.getElementById("app app--list");
const lock = document.querySelector(".lock");

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
});

//Lock screen===================================
lock.addEventListener("click", () => {
  lock.classList.add("hide");
});
