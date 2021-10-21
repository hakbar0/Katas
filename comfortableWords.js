const comfortable_word = (word) => {
  const r = ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"];
  const arr = word
    .split("")
    .map((v) => (r.includes(v) ? "right" : "left"))
    .join("");
  return !(arr.includes("leftleft") || arr.includes("rightright"));
};
