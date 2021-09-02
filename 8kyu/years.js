var humanYearsCatYearsDogYears = function (humanYears) {
  let dog = 0,
    cat = 0;

  if (humanYears >= 3) {
    dog = 15 + 9 + 4 * (humanYears - 2);
    cat = 15 + 9 + 5 * (humanYears - 2);
  } else if (humanYears > 1) {
    dog = 15 + 9;
    cat = 15 + 9;
  } else {
    dog = 15;
    cat = 15;
  }
  return [humanYears, dog, cat];
};
