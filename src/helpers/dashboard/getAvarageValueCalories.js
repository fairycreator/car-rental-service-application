export function getAvarageValueCalories(arr) {
  if (arr?.length === 0) return 0;

  const newValueArr = arr.filter((value) => value.totalCalories > 0);
 
  const totalScore = newValueArr?.reduce((total, newValueArr) => {
    return total + newValueArr.totalCalories;
  }, 0);
  const averageScore = totalScore / newValueArr?.length;
  return Math.round(averageScore);
}
