//Homework-6
//№1
function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) return mid;
    if (mid > l && arr[mid - 1] == x) return mid - 1;
    if (mid < r && arr[mid + 1] == x) return mid + 1;
    if (arr[mid] > x) return binarySearch(arr, l, mid - 2, x);
    return binarySearch(arr, mid + 2, r, x);
  }

  return -1;
}
let arr = [2, 12, 15, 48, 64];
let a = arr.length;
let x = 4;
let result = binarySearch(arr, 0, a - 1, x);
if (result == -1) console.log(result);

//№2

//№3
function oddNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (item % 2) console.log(item * 3);
  }
}

let numbers = [5, 4, 78, 0, -3, 7];
oddNumbers(numbers);

//№4
let n = 999999999999;
function getSum(n) {
  let sum = 0;
  while (n > 0 || sum > 9) {
    if (n == 0) {
      n = sum;
      sum = 0;
    }
    sum = sum + (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(getSum(n));

//№5
const fib = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    const arr = fib(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};
console.log(fib(10));
