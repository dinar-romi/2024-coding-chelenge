const maskify = (cc) => {
  return cc
    .split("")
    .map((e, i, arr) => (i <= arr.length - 5 ? "#" : e))
    .join("");
};
