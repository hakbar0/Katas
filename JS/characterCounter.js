const validateWord = (s) => {
  let uCase = s.toUpperCase();
  let uniq = [...new Set(uCase)].length;
  return uCase.length % uniq === 0;
};
