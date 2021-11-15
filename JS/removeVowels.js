const removeVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter))
    .join("");
};
