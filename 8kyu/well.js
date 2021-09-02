function well(x) {
  const goodIdea = x.filter((idea) => idea === "good");
  if (goodIdea.length > 2) return "I smell a series!";
  else if (goodIdea.length > 0) return "Publish!";
  return "Fail!";
}
