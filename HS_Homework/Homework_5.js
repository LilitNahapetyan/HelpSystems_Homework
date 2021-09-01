/*1.Write a recursive function to determine whether all digits of the number are odd or not. */
function onlyOddDigits(number) {
  if (number < 0) {
    return onlyOddDigits(-number);
  }
  if (number < 9 && number % 2 == 1) {
    return true;
  }
  let x = number % 10;
  if (x % 2 !== 0) {
    number = (number - x) / 10;
    return onlyOddDigits(number);
  }
  return false;
}

//console.log(onlyOddDigits(7791));
//console.log(onlyOddDigits(5));


/*2. Given an array of numbers. Write a recursive function to find its minimal positive element. 
(if such element does not exist, return -1)․*/
function minPositiveNumber(arr, x = -1) {
  if (arr[0] > 0 && x == -1) {
    x = arr[0];
  }

  if (arr[0] < x && arr[0] > 0) {
    x = arr[0];
  }
  if (arr.length == 1) {
    return x;
  }
  if (arr.length == 0 && x < 0) {
    return -1;
  }

  return minPositiveNumber(arr.slice(1), x);
}

//console.log(minPositiveNumber([56, -9, 87, -23, 0, -105, 55, 1]));
//console.log(minPositiveNumber([-5, -9, -111, -1000, -7]));

/*3. Given an array of numbers which is almost sorted in ascending order.  
Find the index where sorting order is violated.*/

function violatedIndex(arr, i = 0) {
  if (arr.length == 1) {
    return -1;
  }
  if (arr[0] >= arr[1]) {
    return i + 1;
  }
  return violatedIndex(arr.slice(1), i + 1);
}

//console.log(violatedIndex([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(violatedIndex([5, 9, 111, 1000]));


/*4. Given an array. Write a recursive function that removes the first element and returns the given array.
(without using arr.shift())*/
function deleteFirst(arr,i = 1,new_arr = []){
  if(arr.length < 2){
    return [];
  }
  if(i == arr.length){
    return new_arr;
  }
  new_arr.push(arr[i]);
  return deleteFirst(arr,i+1,new_arr);
}

//console.log(deleteFirst([6, 78, 'n', 0, 1]));


/*5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint
create a function that concats arrays).*/

function flattenNestedArray(arr, result = []) {
  if (arr.length == 0) {
    return result;
  }
  if (!Array.isArray(arr[0])) {
    result.push(arr[0]);
    return flattenNestedArray(arr.slice(1), result);
  }
  if (Array.isArray(arr[0])) {
    concat(arr[0], arr.slice(1));
    return flattenNestedArray(arr[0], result);
  }
}

function concat(arr1, arr2) {
  for (i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
}
//console.log(flattenNestedArray([1, [3, 4, [1, 2]], 10]));
//console.log(flattenNestedArray([14, [1, [[3, []]], 1], 0]));


/*6.Given an array and a number N.  Write a recursive function that rotates an array N
places to the left. (Hint: to add an element to the beginning use arr.unshift()) */

function rotate(arr, n) {
  if (n == 0) {
    return arr;
  } else if (n > 0) {
    let x = arr[0];
    arr.shift();
    arr.push(x);
    return rotate(arr, n - 1);
  } else {
    let x = arr[arr.length - 1];
    arr.pop();
    arr.unshift(x);
    return rotate(arr, n + 1);
  }
}

//console.log(rotate(["a", "b", "c", "d", "e", "f", "g", "h"], -2));
//console.log(rotate(["a", "b", "c", "d", "e", "f", "g", "h"], 3));



/*7. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1
digit find the sum of digits of that number. Repeat that process if needed and return the result.*/
function sumDigit(number, sum = 0) {
  if (number < 0) {
    number = -number;
  }
  if (number < 10) {
    return sum + number;
  }
  sum += number % 10;
  number = (number - (number % 10)) / 10;
  return sumDigit(number, sum);
}

//console.log(sumDigit(29));
//console.log(sumDigit(999999999999));