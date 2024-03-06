const getSum = (a, b) => {
  if (a == b) return a;

  const t = [a, b].sort((j, k) => j - k);

  console.log(t[0] + 0);

  let result = 0;
  for (let i = t[0]; i <= t[1]; i++) {
    result = result + i;
  }
  return result;
};
