const accum = (s) => {
  s = s.toLowerCase();

  let parts = s.split("").map((char, index) => {
    return char.toUpperCase() + char.repeat(index);
  });

  return parts.join("-");
};
