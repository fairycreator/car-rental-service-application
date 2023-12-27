export function getAvarageValueWeight(arr, changedWeight) {
  if (arr?.length === 0) return 0;
  let totalScore = 0;
  let newArr = [...arr];
  if (arr[arr?.length - 1].value !== changedWeight) {
    newArr.pop();
  }

  totalScore = newArr?.reduce((total, item) => {
    return total + item.value;
  }, 0);
  let averageScore = 0;


  if (arr[arr?.length - 1].value !== changedWeight) {
    totalScore = totalScore + changedWeight;
    averageScore = totalScore / arr?.length + 1;
  }
  averageScore = totalScore / arr?.length;
  return Math.round(averageScore);
}
