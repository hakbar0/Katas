function addLetters(...letters) {
  if (letters.length === 0) return "z";
  if (letters.length <= 1) return letters.join("");
  let val = letters.map((x) => x.charCodeAt() - 96).reduce((a, b) => a + b, 0);
  return returnLetter(val);
}

function returnLetter(x) {
  if (x < 27) return String.fromCharCode(x + 96);
  else return returnLetter(x - 26);
}
