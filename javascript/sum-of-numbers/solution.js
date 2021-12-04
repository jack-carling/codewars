function getSum(a, b) {
  if (a === b) return a;
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let i = min;
  let result = 0;
  do {
    result += i;
    i++;
  } while (i <= max);
  return result;
}
