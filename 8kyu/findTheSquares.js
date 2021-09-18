const findSquares = (num) => {
  let smallNum = (num - 1) / 2,
    bigNum = smallNum + 1;
  return `${Math.pow(bigNum, 2)}-${Math.pow(smallNum, 2)}`;
};
