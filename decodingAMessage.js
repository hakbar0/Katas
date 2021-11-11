const decode = (message) => {
  return message
    .split("")
    .map((x) => {
      if (x == -"") return x;
      return String.fromCharCode(219 - x.charCodeAt(0));
    })
    .join("");
};
