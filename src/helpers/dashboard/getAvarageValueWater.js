export function getAvarageValueWater(arr) {
  if (arr?.length === 0) return 0;
  const totalScore = arr?.reduce((total, arr) => {
    return total + arr.value;
  }, 0);
  const averageScore = totalScore / arr?.length;
  return Math.round(averageScore);
}
