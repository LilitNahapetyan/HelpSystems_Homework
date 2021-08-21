/*1. Given a sentence with missing words and an array of words. Replace all ‘_’ in a
sentence with the words from the array. */

let words = ["first", "succeed", "again"];
let sentence = "If at _ you don’t _, try, try _.";
let k = 0;
for (let i = 0; i < words.length; i++) {
  for (let j = k; j < sentence.length; j++) {
    if (sentence[j] == '_') {
      sentence = sentence.replace("_", words[i]);
      k = j;
      break;
    }
  }
}
alert(sentence);

/*2. Given mixed an array of numbers, strings, booleans, nulls, and undefined.
Filter array and get all the numbers in a separate array. 
Arrange them such as from the beginning are the odds and from the ending the evens.*/

let arr_ = [8, 0, 1, 'hey', 12, 5, true, '2', null, 7, 3]
let seperate_arr_odd = [];
let seperate_arr_even = [];

for (let i = 0; i < arr_.length; i++) {
  if (arr_[i] === +arr_[i]) {
    if (arr_[i] % 2 == 0) {
      seperate_arr_even.push(arr_[i]);
    } else {
      seperate_arr_odd.push(arr_[i]);
    }
  }
}
alert(seperate_arr_odd + ',' + seperate_arr_even);




/*3. Given an array of strings and numbers. Print the number of integers and 
the numbe of strings in the array. */

let mixedArr = [1, 4, 'i am a string', '456'];
let numberOfIntegers = 0;
let numberOfStrings = 0;
for (let i = 0; i < mixedArr.length; i++) {
  if (typeof(mixedArr[i]) == "number") {
    numberOfIntegers += 1;
  } else if (typeof(mixedArr[i]) == "string") {
    numberOfStrings += 1;
  }
}
alert(`The number of integers in the array is ${numberOfIntegers}`);
alert(`The number of strings in the array is ${numberOfStrings}`);

/*4. Given an array of strings. Find the strings with maximum and minimum lengths in an array. 
Print the sum of their lengths. */
let arrayOfStrings = ['anymore', 'raven', 'me', 'communicate'];
let minLength = maxLength = arrayOfStrings[0].length;
let current = 0;
for (let i = 1; i < arrayOfStrings.length; i++) {
  current = arrayOfStrings[i].length;
  if (minLength > current) {
    minLength = current;
  }
  if (maxLength < current) {
    maxLength = current;
  }

}
alert(minLength + maxLength);

/*5. Given an array of numbers and a number. 
Find the index of a first element that is equal to that number. 
If there is not such a number, that find the index of the first 
element which is the closest to it. */
let arr = [36, -12, 47, -58, 148, -55, -19, 10];
let num = -56;
let index = 0;
let min_sub = arr[0] - num;
for (let i = 0; i < arr.length; i++) {
  let sub = arr[i] - num;
  if (sub == 0) {
    index = i;
    break;
  } else if (Math.abs(min_sub) > Math.abs(sub)) {
    min_sub = sub;
    index = i;
  }
  alert(index);
}
alert(index);

/*6. Given a sentence as a string. Split it according to space and comma 
and create an array consisting of the words of the array. 
The last word should not contain the last . or ! . */
let word = "Keep your friends close, but your enemies closer.";
let newArr = [];
let str = "";
for (let i = 0; i < word.length; i++) {
  if (word[i] == "," || word[i] == " ") {
    newArr.push(str);
    str = "";
  } else {
    str += word[i];
  }
}
if (str) {
  if (str.slice(-1) == "." || str.slice(-1) == "!") {
    newArr.push(str.slice(0, -1));
  } else {
    newArr.push(str);
  }
}
alert(newArr);

/*7. Given an array of a size smaller than 100. It consists of numbers 
from 0 to 99 in any order. Create a new array where each element from 
that array is placed under the index of its value. 
Start from the smallest value and endwith the biggest one. 
If there are missing values, put them in their places undefined. */

let nums = [26, 30, 19, 5];
let newArray = [];
nums.sort();
let j = 0;
for (let i = 0; i < 100; i++) {
  if (i == nums[j]) {
    newArray[i] = i;
    j += 1;
  } else {
    newArray[i] = undefined;
  }
}
console.log(newArray);

/*8. Given an array consisting of the arrays of numbers (like a two-dimensional array). 
Find the sum of each row and print them as an array. */
let arr_ = [[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]];
let newArr = [];

for(let i = 0; i < arr_.length; i++){
  let sum_ = 0;
  for(let j = 0; j < arr_[i].length; j++){
      sum_ += arr_[i][j];
  }
  newArr.push(sum_);
}
alert(newArr);

/*9. Print the following pattern:

******
*    *
*    *
*    *
*    *
*    *
****** 
*/
let col = 6;
let row = 7;
let str_ = "";

for(let i = 1; i <= col; i++){
    for(let j = 1; j <= row; j++){
        if(i == 1 || i == col || j == 1 || j == row){
            str_ += '*';
        }else{
            str_ += ' ';
        }
    }
    str_ += '\n';
}
alert(str_);



/*10. Print the following number pattern:

1
2  6
3  7  10
4  8  11 13
5  9  12 14 15 */

let heigth = 5;
let str = '';
for(let i = 1; i <= heigth; i++){
    let x = i;
    for(let j = 1; j <= i; j++){
        str += ' ' + x;
        x += heigth - j;
    }
    str += '\n';
} 
alert(str);