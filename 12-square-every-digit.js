const squareDigits = (num) =>
  +num
    .toString()
    .split("")
    .map((e) => e * e)
    .join("");
