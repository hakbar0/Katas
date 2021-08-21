/*
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  let str = "";
  let firstEl = s.sort()[0];

  [...firstEl].forEach((char, index) => {
    str += char;
    if (firstEl.length - 1 !== index) str += "***";
  });
  return str;
}
