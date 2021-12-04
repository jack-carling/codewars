function toCamelCase(str) {
  if (!str) return '';
  str = str.split('-').length > 1 ? str.split('-') : str.split('_');
  return str
    .map((s, i) => {
      if (i === 0) return s;
      return s.charAt(0).toUpperCase() + s.slice(1);
    })
    .join('');
}
