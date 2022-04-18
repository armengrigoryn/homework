//Homework-1
//№1
function changedPlaces(obj) {
  const changedPlaces = Object.entries(obj).map(([key, value]) => [value, key]);
  return Object.fromEntries(changedPlaces);
}
console.log(changedPlaces({ a: "1", b: "2" }));

//№2
var a = { a: "1" };
var b = { a: "1" };
function shallowCompare(a, b) {
  for (let key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }
  for (let key in b) {
    if (!(key in a) || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

//№3
function areDistinct(arr) {
  let n = arr.length;
  let s = new Set();
  for (let i = 0; i < n; i++) {
    s.add(arr[i]);
  }
  return s.size == arr.length;
}
let array = [1, 2, 3, 4];

if (areDistinct(arr)) {
  console.log("Все элементы различаются");
} else {
  console.log("Не все Элементы различаются");
}
// я пишу на русском так как мне просто легче, спасибо за понимание))

//№4
function checkIsogram(str) {
  let length = str.length;
  let mapHash = new Array(26);
  mapHash.fill(0);
  for (let i = 0; i < length; i++) {
    mapHash[str[i].charCodeAt() - "a".charCodeAt()]++;
    if (mapHash[str[i].charCodeAt() - "a".charCodeAt()] > 1) {
      return false;
    }
  }
  return true;
}
let str = "apple";
if (check_isogram(str)) console.log("True");
else console.log("False");

//№5
let arr = [1, 2, 3, 4, 6];
let n = arr.length;
let miss = getMissingNo(arr, n);
function getMissingNo(a, n) {
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) total -= a[i];
  return total;
}
console.log(miss);
