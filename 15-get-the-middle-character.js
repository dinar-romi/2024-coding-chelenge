const getMiddle = (s) => {
  return s.length % 2 === 1 ? s.slice(s.length / 2 - 0.5, s.length / 2 + 0.5) : s.slice(s.length / 2 - 1, s.length / 2 + 1);
};
