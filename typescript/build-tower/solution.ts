export const towerBuilder = (nFloors: number): string[] => {
  let spaces = nFloors - 1;
  let result: string[] = [];
  const asterisk = '*';
  const space = ' ';
  for (let i = 0; i < nFloors; i++) {
    const string = `${space.repeat(spaces)}${asterisk.repeat(i * 2 + 1)}${space.repeat(spaces)}`;
    spaces--;
    result.push(string);
  }
  return result;
};
