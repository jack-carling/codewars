function accum(s) {
  const strings = s.split('');
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].toLowerCase();
    for (let j = 0; j < i; j++) {
      strings[i] += strings[i].slice(0, 1);
    }
    strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
  }
  return strings.join('-');
}
