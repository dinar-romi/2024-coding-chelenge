const descendingOrder = (n) => {
  return +`${n}`
    .split("")
    .sort((a, b) => a - b)
    .reverse()
    .join("");
};
