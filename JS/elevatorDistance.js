const elevatorDistance = (arr) => {
  const reducer = (prev, val, i) => {
    return prev + Math.abs(val - arr[i]);
  };
  return arr.slice(1).reduce(reducer, 0);
};
