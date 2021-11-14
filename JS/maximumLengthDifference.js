function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let lengthA = a1.map((x) => x.length);
  let lengthB = a2.map((x) => x.length);
  let bigA = Math.max(...lengthA) - Math.min(...lengthB);
  let bigB = Math.max(...lengthB) - Math.min(...lengthA);
  return Math.max(bigB, bigA);
}
