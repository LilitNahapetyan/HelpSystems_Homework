/* 1.Given an array of numbers. 
Write a function to separate odd and even numbers in different arrays. */

function seperateOddAndEven(arr) {
  let oddNumbers = [],
    evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenNumbers.push(arr[i]);
    } else {
      oddNumbers.push(arr[i]);
    }
  }
  console.log(
    `${oddNumbers} are odd numbers`,
    "\n",
    `${evenNumbers} are even numbers`
  );
}

seperateOddAndEven([1, 2, 3, 4, 5]);


/*2. Write a function that calculates the sum, difference, multiplication, and
division between given array elements depending on the passed operation symbol.
Write the appropriate function for each operation.*/

function calculator(arr_, symbol_) {
  let result = [];
  for (let i = 0; i < arr_.length - 1; i += 1) {
    if (symbol_ == "+") {
      result.push(arr_[i] + arr_[i+1]);
    } else if (symbol_ == "-") {
      result.push(arr_[i] - arr_[i+1]);
    } else if (symbol_ == "*") {
      result.push(arr_[i] * arr_[i+1])
    } else if (symbol_ == "/") {
      result.push(arr_[i] / arr_[i+1])
    }
  }
  return result;
}



/*3. Given a phone number.
Write a function to clean it up, so it is valid. */
function validatePhoneNumber(phoneNumber) {
  phoneNumber = phoneNumber.split(" ").join("");
  if (phoneNumber.startsWith("+")) {
    phoneNumber = phoneNumber.slice(1);
  }
  if (phoneNumber.length != 10 && phoneNumber !== +phoneNumber) {
    console.log("It is a bad number");
  }
  return phoneNumber;
}


/* 4.Given a word and a list
of possible anagrams, select the correct sublist.*/
function sameWord(word1, word2) {
  word1.toLowerCase();
  word2.toLowerCase();
  let count1 = (count2 = 0);
  if (word1.length == word2.length) {
    for (let i = 0; i < word1.length; i++) {
      count1 += word1.charCodeAt(i);
      count2 += word2.charCodeAt(i);
    }
    if (count1 == count2) {
      return true;
    }
  }
  return false;
}

function anagram(word, array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (sameWord(word, array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
}

/*5. Write a function, which receives a string, finds possible largest 
numbers in the string, and returns their sum.*/
function sumOfNumbersInTheString(str) {
  let sum = 0;
  let num = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == +str[i]) {
      num += str[i];
    }
    if (num == 0 || (num && (i == str.length - 1 || str[i + 1] != +str[i + 1]))) {
      sum += +num;
      console.log(sum);
      num = "";
    }
  }
  return sum;
}

/*6. Write a function which receives two strings and removes appearances of 
the second string from the first one.*/
function remove(str1, str2) {
  let i = 0;
  let result = "";
  while (i < str1.length) {
    if (str1.slice(i, i + str2.length) == str2) {
      i += str2.length;
    } else {
      result += str1[i];
      i += 1;
    }
  }
  return result;
}

console.log(remove('This is some text.','is'));


/*7,8. Write a function to compute a new string from the given one by moving the first 
char to come after the next two chars, so "abc" yields "bca". Repeat this process 
for each subsequent group of 3 chars. Ignore any group of fewer than 3
chars at the end. */
function move(str) {
  let result = "";
  for (let i = 0; i < str.length - 2; i += 3) {
    result += str[i + 2] + str.slice(i, i + 2);
  }
  return result;
}


/*9 Write a function that accepts a string(a sentence) as a parameter and 
finds the longest word within the string․ 
If there are several words which are the longest ones print the
last word(words can be separated by space, comma, or hyphen).*/
function findLargestWord1(sentence) {
  let str = "";
  let longWord;
  let maxLength = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== "," && sentence[i] != " " && sentence[i] != "-") {
      str += sentence[i];
    } else {
      if (i == sentence.length - 1) {
        if (str.slice(-1) == "." || str.slice(-1) == "!") {
          str = str.slice(0, -1);
        }
      }
      if (maxLength <= str.length) {
        maxLength = str.length;
        longWord = str;
      }
      str = "";
    }
  }
  return longWord;
}

function findLargestWord2(sentence) {
  sentence = sentence.replace(",", "").replace("-", "").replace("  ", " ");
  if (sentence.endsWith(".") || sentence.endsWith("?")) {
    sentence = sentence.slice(0, -1);
  }
  let wordArr = sentence.split(" ");
  let longWord = "";
  for (let i = 0; i < wordArr.length; i++) {
    if (longWord.length <= wordArr[i].length) {
      longWord = wordArr[i];
    }
  }
  return longWord;
}



/* 10.Write a function that receives an array and a number as arguments and returns a
new array from the elements of the given array which are larger than the
given number.*/

function filterLargeNumbers(number, arrayOfNumber) {
  let newArr = [];
  for (let i = 0; i < arrayOfNumber.length; i++) {
    if (number < arrayOfNumber[i]) {
      newArr.push(arrayOfNumber[i]);
    }
  }
  return newArr;
}

/*11 Write a function to find the longest substring in a given string without repeating characters except for space
character. If there are several, return the last one. Consider that all letters are lowercase. */

function longestSubstring(sentence_) {
  sentence = sentence_.toLowerCase();
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    let current = "";
    for (let j = i; j < sentence.length; j++) {
      if (sentence[j] == " " || !current.includes(sentence[j])) {
        current += sentence[j];
      } else {
        if (current.length >= result.length) {
          result = current;
        }
        break;
      }
    }
  }
  return result;
}

console.log(longestSubstring('there are no two words in the english language more harmful than "good job"'));



/*12 Write a function, which receives two numbers as arguments and finds all numbers 
between them such that each digit of the number is even. 
The numbers obtained should be printed in a comma-separated sequence on a single line.
 */
function onlyEvenDigits(number) {
  while (number != 0) {
    if (number % 2 == 0) {
      number = (number - (number % 10)) / 10;
    } else {
      return false;
    }
  }
  return true;
}

function filterNumbers(num1, num2) {
  let resultArray = [];
  let minNum = 0;
  let maxNum = 0;
  if (num1 > num2) {
    maxNum = num1;
    minNum = num2 + 1;
  } else {
    maxNum = num2;
    minNum = num1 + 1;
  }

  while (minNum < maxNum) {
    if (onlyEvenDigits(minNum)) {
      resultArray.push(minNum);
      minNum += 2;
    } else {
      minNum += 1;
    }
  }
  return resultArray;
}


/*13 Write a function, which will receive a number between 0 to 999,999 
and spell out that number in English.*/
function SmallerThan999(num) {
  let oneDigit = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let twoDigit1 = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  let twoDigit2 = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let result = "";
  let n = num % 100;
  if (n < 10) {
    result += " " + oneDigit[n];
  } else if (n < 20) {
    result += " " + twoDigit1[n % 10];
  } else {
    result += " " + twoDigit2[(n - (n % 10)) / 10] + " " + oneDigit[n % 10];
  }
  if (num > 99) {
    num = (num - n) / 100;
    result = oneDigit[num % 10] + " hundred" + result;
  }
  return result;
}

function largerThan999(num) {
  let result = "";
  let x = num % 1000;
  num = (num - x) / 1000;
  return SmallerThan999(num) + " " + "thousand," + " " + SmallerThan999(x);
}

function englishNumber(n) {
  if (n <= 999) {
    return SmallerThan999(n);
  }
  return largerThan999(n);
}

/*14 Write a JavaScript function to get all possible subsets of length 3 of the given array. 
Assume that all elements in the array are unique. */
function subsets(arr) {
  let newArr = [];

  if (arr.length <= 3) {
    return arr;
  }
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        newArr.push([arr[i], arr[j], arr[k]]);
      }
    }
  }
  return newArr;
}


/*15 Write a function, which receives an array as an argument which elements arrays of numbers. 
Find the product of the biggest negative number of each array. If there is not any negative number,
ignore that array. Check that item of the given array are arrays. */
function f(arr) {
  let product = 1;
  let new_ = [];
  //select items of the given array which have negative value
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && Math.min(...arr[i]) < 0) {
      new_.push(arr[i]);
    }
  }
  if (new_.length == 0) {
    return 0;
  }
  //find the biggest negative value of each array
  for (let i = 0; i < new_.length; i++) {
    let min = Math.min(...new_[i]);
    for (let j = 0; j < new_[i].length; j++) {
      if (new_[i][j] < 0 && new_[i][j] > min) {
        min = new_[i][j];
      }
    }
    product *= min;
  }

  return product;
}
