const dnaStrand = (dna) => {
  return dna
    .split("")
    .map((letter) => {
      switch (letter) {
        case "A":
          return "T";

          break;
        case "T":
          return "A";

          break;
        case "G":
          return "C";

          break;
        case "C":
          return "G";

          break;
      }
    })
    .join("");
};
