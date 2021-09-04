function alphabetWar(fight, count = 0) {
  const obj = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };
  fight.split("").forEach((x) => {
    if (obj[x]) count += obj[x];
  });
  if (count === 0) return "Let's fight again!";
  return count > 0 ? "Left side wins!" : "Right side wins!";
}
