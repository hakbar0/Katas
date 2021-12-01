const bump = (x) => {
  const bumps = x.split("_").join("").length;
  return bumps > 15 ? "Car Dead" : "Woohoo!";
};
