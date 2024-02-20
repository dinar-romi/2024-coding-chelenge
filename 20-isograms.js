const isIsogram = (str) => {
  str = str.toLowerCase();

  let uniqueChars = new Set(str);

  return uniqueChars.size === str.length;
};
