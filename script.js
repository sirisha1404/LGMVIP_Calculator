const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

function insert(num) {
  calculation.textContent += num;
  console.log(num);
}

document.getElementById("clear").addEventListener("click", function () {
  calculation.textContent = "";
  result.textContent = 0;
});

document.getElementById("equal").addEventListener("click", function () {
  var exp = calculation.textContent;
  result.textContent = eval(exp);
  calculation.textContent = result.textContent;
});

document.getElementById("back").addEventListener("click", function () {
  var exp = calculation.textContent;
  calculation.textContent = exp.substring(0, exp.length - 1);
});
