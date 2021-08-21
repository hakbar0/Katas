function divide(weight) {
  if (weight <= 2) {
    return false;
  } else {
    return weight % 2 === 0 ? true : false;
  }
}

//refactor

function divide(weight) {
  return weight % 2 == 0 && weight > 2 ? true : false;
}
