//Homework-7
//№1 without using arr.unshift()
let arr = [6, 78, "n", 0, 1];
let n = 1;
arr = arr.splice(n);
console.log(arr);

//№2
function smoothOut(ary) {
  var ret = [];
  for (var i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      ret = ret.concat(smoothOut(ary[i]));
    } else {
      ret.push(ary[i]);
    }
  }
  return ret;
}
smoothOut([1, [3, 4, [1, 2]], 10]);

//№3
function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}
function leftRotate(arr, d, n) {
  d = d % n;
  let g_c_d = gcd(d, n);
  for (let i = 0; i < g_c_d; i++) {
    let temp = arr[i];
    let j = i;
    while (1) {
      let k = j + d;
      if (k >= n) k = k - n;

      if (k == i) break;

      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
}
function printArray(arr, size) {
  for (let i = 0; i < size; i++) console.log(arr[i] + " ");
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;
leftRotate(arr, 2, n);
printArray(arr, n);

//№4
// let items = [
// 	{ book: "Catcher in the Ray", readStatus:true, percent: 40},
// 	{ book: "Animal Farm", readStatus:true, percent: 20},
// 	{ book: "Solaris", readStatus:false, percent: 90},
// 	{ book: "The Fall", readStatus:true, percent: 50},
// 	{ book: "White Nights", readStatus:false, percent: 60},
// 	{ book: "After Dark", readStatus:true, percent: 70}
//   ];
// items.sort(function (a, b) {
//   return a.percent - b.percent;
// });
// items.sort(function(a, b) {
//   let bookA = a.book.toUpperCase();
//   let bookB = b.book.toUpperCase();
//   if (bookA < bookB) {
//     return -1;
//   }
//   if (bookA > bookB) {
//     return 1;
//   }
//   return 0;
// });
// я на самом деле не совсем понял как это решать и прекрасно понимаю что решение не правильное

//№5
