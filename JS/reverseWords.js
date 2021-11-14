/*

Complete the solution so that it reverses all of the words within the string passed in.

*/

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

//another harde kata

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
