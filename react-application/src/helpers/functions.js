export const capitalize = (string) => {
  if (!string || typeof (string) != 'string') return '';

  return string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
