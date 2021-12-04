function isTriangle(a, b, c) {
  if (a + b <= c) return false;
  if (a + c <= b) return false;
  if (b + c <= a) return false;
  return true;
}
