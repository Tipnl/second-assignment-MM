function click1() {
  document.calculator.display.value += 1;
}

function click2() {
  document.calculator.display.value += 2;
}

function click3() {
  document.calculator.display.value += 3;
}

function click4() {
  document.calculator.display.value += 4;
}

function click5() {
  document.calculator.display.value += 5;
}

function click6() {
  document.calculator.display.value += 6;
}

function click7() {
  document.calculator.display.value += 7;
}

function click8() {
  document.calculator.display.value += 8;
}

function click9() {
  document.calculator.display.value += 9;
}

function click0() {
  document.calculator.display.value += 0;
}

function clickAdd() {
  document.calculator.display.value += "+";
}

function clickSub() {
  document.calculator.display.value += "-";
}

function clickMul() {
  document.calculator.display.value += "*";
}

function clickDiv() {
  document.calculator.display.value += "/";
}

function clickClr() {
  document.calculator.display.value = "";
}

function clickRes() {
  var Display = eval(document.calculator.display.value);
  document.calculator.display.value = Display;
}
