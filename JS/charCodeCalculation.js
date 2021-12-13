const calc = (x) => {
  const t1 = x.split("").reduce((a, b) => a + b.charCodeAt(0), "");
  const t2 = t1.replace(/7/g, "1");
  return total(t1) - total(t2);
};

const total = (t) => [...t].reduce((a, b) => +a + +b);
