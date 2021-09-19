function calcType(a, b, res) {
  if (res === add(a, b)[0]) return add(a, b)[1];
  if (res === sub(a, b)[0]) return sub(a, b)[1];
  if (res === mult(a, b)[0]) return mult(a, b)[1];
  if (res === div(a, b)[0]) return div(a, b)[1];
}

function add(a, b) {
  return [a + b, "addition"];
}

function sub(a, b) {
  return [a - b, "subtraction"];
}

function mult(a, b) {
  return [a * b, "multiplication"];
}

function div(a, b) {
  return [a / b, "division"];
}
