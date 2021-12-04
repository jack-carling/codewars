function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map((n) => Math.pow(Number(n), 2))
      .join('')
  );
}
