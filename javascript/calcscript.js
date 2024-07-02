///Calculator=======================
  const display = document.getElementById("display");

  document.getElementById("1").addEventListener("click", () => {
    display.value += "1";
  });
  document.getElementById("2").addEventListener("click", () => {
    display.value += "2";
  });
  document.getElementById("3").addEventListener("click", () => {
    display.value += "3";
  });
  document.getElementById("4").addEventListener("click", () => {
    display.value += "4";
  });
  document.getElementById("5").addEventListener("click", () => {
    display.value += "5";
  });
  document.getElementById("6").addEventListener("click", () => {
    display.value += "6";
  });
  document.getElementById("7").addEventListener("click", () => {
    display.value += "7";
  });
  document.getElementById("8").addEventListener("click", () => {
    display.value += "8";
  });
  document.getElementById("9").addEventListener("click", () => {
    display.value += "9";
  });
  document.getElementById("0").addEventListener("click", () => {
    display.value += "0";
  });
  document.getElementById("+").addEventListener("click", () => {
    display.value += "+";
  });
  document.getElementById("/").addEventListener("click", () => {
    display.value += "/";
  });
  document.getElementById("-").addEventListener("click", () => {
    display.value += "-";
  });
  document.getElementById("*").addEventListener("click", () => {
    display.value += "*";
  });
  document.getElementById(".").addEventListener("click", () => {
    display.value += ".";
  });
  document.getElementById("=").addEventListener("click", () => {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  });
  document.getElementById("C").addEventListener("click", () => {
    display.value = "";
  });


///==============================
