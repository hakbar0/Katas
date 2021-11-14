function longest(s1, s2) {
  var join = s1 + s2;
  return [...new Set(join.split(""))].sort().join("");
}
