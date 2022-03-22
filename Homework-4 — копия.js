// Homework-4
//N1 


//N2
function countString(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');
const result = countString(string, letterToCheck);

console.log(result);

//N3
function checkPalindrome( str ) {
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i];
      let y = str[j-i];
      if( x != y)
      {
        return false;
      }
    }
    return true;
}
function isPalindrome( str )
  {    let ans = checkPalindrome(str);
    if( ans == true )
    {
      console.log("YES");
    }
    else
    {
      console.log("NO");
    }
  }
  let test = "asddsa";
  isPalindrome(test);

  //N4
  function largest(arr) {
    let i;
    let max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }  
  return max;
}
let arr = [1, 10, 2, 2, 3];
console.log("Самый большой массив от Армена, это - " + largest(arr));

//N5 . . .


//N6  
function replace(s,c1,c2) {
    let l = s.length;
    let arr = s.split("");
    for (let i = 0; i < l; i++) {
        if (arr[i] == c1)
            arr[i] = c2;
        else if (arr[i] == c2)
            arr[i] = c1;
   }   
    return arr.join("");
}
    let s = "The results are not recorded yet";
    let c1 = 't', c2 = 'w';
    console.log(replace(s, c1, c2));

//N7 но у меня не получилось сделать именнно пирамидку так сказать, только 2ая часть вышла почему-то 
// document.write чтобы резултат был прямо в браузере, потому что в консоли это выглядит очень неочень...
let i, j;
for(i=5; i>=1; i--)
{
 for(j=1; j<=i; j++)
document.write(j);
document.write("<br>");
}
