function multiTable(number, str = "") {
  for (let i = 1; i < 11; i++) {
    str += `${i} * ${number} = ${number * i}${i !== 10 ? `\n` : ``}`;
  }
  return str;
}
