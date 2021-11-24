const consecutiveDucks = (num) => {
  if (num < 2) return false;
  return num % 2 !== 0 ? true : consecutiveDucks(num / 2);
};
