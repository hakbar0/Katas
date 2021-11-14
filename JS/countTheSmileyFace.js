//return the total number of smiling faces in the array
const countSmileys = (arr) => {
  const validSmileys = [
    ":)",
    ";)",
    ":-)",
    ";-)",
    ";~)",
    ":~)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ";-D",
    ";~D",
  ];
  return arr.filter((x) => validSmileys.includes(x)).length;
};
