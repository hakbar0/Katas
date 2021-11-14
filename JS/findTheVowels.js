function vowelIndices(word, out = []) {
  let vowels = ["A", "E", "I", "O", "U", "Y"];
  word
    .toUpperCase()
    .split("")
    .forEach((letter, i) => {
      if (vowels.includes(letter)) out.push(i + 1);
    });
  return out;
}
