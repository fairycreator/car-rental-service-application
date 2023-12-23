export function cutQuery(month) {
  if (!month) return;
  if (month.indexOf('/') === -1) return month;
  return month.slice(month.indexOf('/') + 1, month.length);
}
