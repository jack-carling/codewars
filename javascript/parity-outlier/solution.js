function findOutlier(integers) {
  const even = integers.filter((i) => i % 2 === 0);
  const odd = integers.filter((i) => !(i % 2 === 0));
  if (even.length === 1) return even[0];
  return odd[0];
}
