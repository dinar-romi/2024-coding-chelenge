const longest = (s1, s2) => {
  const a = s1.concat(s2).split("").sort();

  return [...new Set(a)].join("");
};
