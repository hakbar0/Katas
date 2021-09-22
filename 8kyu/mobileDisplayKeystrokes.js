function mobileKeyboard(str) {
  if (str.length === 0) return 0;
  return str
    .split("")
    .map((x) => {
      if ("0123456789*#".includes(x)) return 1;
      if ("adgjmptw".includes(x)) return 2;
      if ("behknqux".includes(x)) return 3;
      if ("cfilorvy".includes(x)) return 4;
      if ("s,z".includes(x)) return 5;
    })
    .reduce((a, b) => a + b, 0);
}
