function duplicateEncode(word) {
  const count = {},
    wordArr = word.toUpperCase().split("");
  let wordStr = "";
  wordArr.forEach((x) => (count[x] = (count[x] || 0) + 1));
  wordArr.forEach((x) => (count[x] > 1 ? (wordStr += ")") : (wordStr += "(")));
  return wordStr;
}
