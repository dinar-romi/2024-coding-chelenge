const sumTwoSmallestNumbers = (numbers) => {
  const sortedNum = numbers.sort((a, b) => a - b);

  return sortedNum[0] + sortedNum[1];
};
