function switcheroo(x) {
  return x
    .split("")
    .map((x) => {
      if (x === "a") return "b";
      else if (x === "b") return "a";
      return x;
    })
    .join("");
}
