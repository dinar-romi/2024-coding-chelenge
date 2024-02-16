const getCount = (str) => {
  return str.match(/a|i|u|e|o/g) ? str.match(/a|i|u|e|o/g).length : 0;
};
