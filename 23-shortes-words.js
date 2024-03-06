const findShort = (s) => {
  const a = s.split(" ").sort((b, c) => b.length - c.length);

  return a[0].length;
};

findShort("bitcoin take over the world maybe who knows perhaps");
// findShort("turns out random test cases are easier than writing out basic ones");
// findShort("Let's travel abroad shall we");
