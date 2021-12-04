export const digitalRoot = (n: number): number => {
  return sum(n.toString().split(''));
};

function sum(numbers: string[]): number {
  let result = 0;
  numbers.map((num) => (result += Number(num)));
  if (result.toString().length > 1) return sum(result.toString().split(''));
  return result;
}
