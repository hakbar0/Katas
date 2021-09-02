function sum(digits = false, str = "", count = 0) {
  if (!digits && digits !== 0) return "";
  const arr = digits.toString().split("");
  arr.forEach((el, i) => {
    if (i != arr.length - 1) str += `${el} + `;
    else str += `${el} = `;
    count += Number(el);
  });
  return str + count;
}
