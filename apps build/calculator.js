// const but1 = document.getElementById("#1");
// const but2 = document.getElementById("#2");
// const but3 = document.getElementById("#3");
// const but4 = document.getElementById("#4");
// const but5 = document.getElementById("#5");
// const but6 = document.getElementById("#6");
// const but7 = document.getElementById("#7");
// const but8 = document.getElementById("#8");
// const but9 = document.getElementById("#9");
// const but0 = document.getElementById("#0");
// const plus = document.getElementById("#plus");
// const minus = document.getElementById("#minus");
// const multiply = document.getElementById("#multiply");
// const divide = document.getElementById("#divide");
// const equals = document.getElementById("#equals");
// const clear = document.getElementById("#clear");
// const box = document.getElementById("#textbox");

// but1.addEventListener("onclick", (e) => {
// e.document.getElementById("#textbox").value += 1;
// });

// the value displayed on the page is 
// division sign

{/* <button id ="multiply" data-value= "*">x</button> */}




// const buttons = document.querySelectorAll("button");
//  const input = document.getElementById("typeSomething");
 
//  buttons.addEventListener("click", function(event) {
//     event.input.value = input.value + currentTarget.value;
//   });
  
//   const myFunction(value) {
//   input.value((this).value());
//   };


document.querySelector('#buttons')
  .addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
      let value = target.innerHTML
      
      document.querySelector('#output').value += value
    }
  });