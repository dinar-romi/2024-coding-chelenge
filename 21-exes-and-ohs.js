const XO = (str) => {
  const s = str.toLowerCase();
  const count = { x: 0, o: 0 };

  for (let char of s) {
    if (char === "x" || char === "o") {
      count[char]++;
    }
  }

  return count["x"] === count["o"];
};
