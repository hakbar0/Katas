function multiple(x, output = "") {
  if (x % 3 === 0) output += "Bang";
  if (x % 5 === 0) output += "Boom";
  return output ? output : "Miss";
}
