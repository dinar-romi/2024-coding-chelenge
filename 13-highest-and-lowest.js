const highAndLow = (numbers) => {
  let sortedNum = numbers.split(" ").sort((a, b) => b - a);

  return `${sortedNum[0]} ${sortedNum[sortedNum.length - 1]}`;
};
