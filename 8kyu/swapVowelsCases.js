function swapVowelCase(str) {
  var vo = ["A", "E", "I", "O", "U"];
  return str
    .split("")
    .map((a) => {
      if (vo.includes(a.toUpperCase())) {
        return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase();
      } else return a;
    })
    .join("");
}
