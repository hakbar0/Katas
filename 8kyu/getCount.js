function getCount(str) {
  var vowels = ["A", "E", "I", "O", "U"];
  var strArr = str.toUpperCase().split("");
  return strArr.filter((b) => vowels.includes(b)).length;
}
