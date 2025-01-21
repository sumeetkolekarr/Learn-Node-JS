let arr = [1,2,1,1,5,6,1,4,3];
let itr = 0;
while (arr.length != 1) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    let sum = arr[i] + arr[i - 1];
    if (sum > 10) {
      sum = sum.toString();
      let lastDigit = Number(sum[1]);
      sum = lastDigit + 1;
    } else if (sum === 10) {
      sum = 1;
    }
    newArr.push(sum);
  }
  itr++;
  arr = newArr;
  console.log("\n");
  console.log(itr);
  console.log("--------------------------");
  console.log(newArr);
}

console.log(arr);
