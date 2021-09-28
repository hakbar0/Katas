function cubeTimes(times) {
  let cubeAvg = Number(
    (
      times
        .sort((a, b) => a - b)
        .slice(1, 4)
        .reduce((a, b) => a + b, 0) / 3
    ).toFixed(2)
  );
  const min = Math.min(...times);
  return [cubeAvg, min];
}
