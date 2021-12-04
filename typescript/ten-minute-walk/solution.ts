interface cardinals {
  n: number;
  s: number;
  w: number;
  e: number;
}

export function isValidWalk(walk: string[]) {
  if (walk.length === 10) {
    let directions: cardinals = {
      n: 0,
      s: 0,
      w: 0,
      e: 0,
    };
    for (let cardinal of walk) {
      directions[cardinal as keyof cardinals] += 1;
    }
    if (directions.n === directions.s && directions.w === directions.e) {
      return true;
    }
  }
  return false;
}
