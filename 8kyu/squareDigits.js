function squareDigits(num) {
  let number = num.toString().split("");
  return Number(number.map((x) => x * x).join(""));
}
