/*1. Insert a digit and a number. Check whether the digits contains in the number or not.*/
function contain(digit, num) {
  while (num >= 0) {
    if (digit === num % 10) {
      alert("Yes");
      break;
    }
    num = (num - num % 10) / 10;

    if (num === 0) {
      alert("No");
      break;
		}
	}
 }
contain(5,2463);
contain(4,6);
contain(8, 45689); 

/*2. Enter a number. Reverse its first and last digits. Print the new number. */

function reverse(n) {
    let sign = 1;
  
    if (n < 0) {
      sign = -1;
      n = -n;
    }
    let last = n % 10;
    let new_ = 0;
    if (last == 0 || (n > 0 && n < 9)) {
      alert(sign * n);
    } else {
      let i = 10;
      let current = last;
      n = (n - current) / 10;
      while (n > 9) {
        current = n % 10;
        new_ += current * i;
        i *= 10;
        n = (n - current) / 10;
      }
      new_ = sign * (new_ + last * i + n);
      alert(new_);
  
    }
  
  }
  reverse(12345);


/*3. Enter a number. Find the difference between its biggest and smallest digits.*/

function max_min_difference(number){
    if(number < 0){
        number *= -1;
    }
    else if(number < 10){
        alert("This number has one digit,please input another number!")
    }else{
        let max = 0;
        let min = 9;
        let last = 0;
        while(number > 0){
            last = number % 10;
            if(max < last){
                max = last;
            }
            if(min > last){
                min = last;
            }
            number = (number - last) / 10;

        }
        alert(max - min);
    }
}

max_min_difference(5);
max_min_difference(152);
max_min_difference(4593653); 

/* 4. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.*/

function is_prime(num){
    let flag = true;
    if(num < 2){
        flag = false;
    }else{
        let x = 2;
        while(x <= Math.pow(num, 0.5)){
            if(num % x === 0){
                flag = false;
                break;
            }else{
                x += 1;
            }
        }
    }
    if(flag){
        alert("yes");
    }else{
        alert("No");
    }
}

is_prime(401);
is_prime(63);
/*5. Write a program that reads two strings for playing the game of Rock-Paper-Scissors. 
If the strings entered by the user are not  'Paper','Rock' or 'Scissors', the program 
keeps on prompting the user to enter new values.
If valid strings are inserted, repeat the loop, until one of the sides wins. 
(You can use alert instead of console.log). */

let player_1;
let player_2;
while (player_1 !== "paper" && player_1 !=="rock" && player_1 !== "scissors") {
  player_1 = prompt("Player_1 choose paper, rock or scissors");
}

while (player_2 !== "paper" && player_2 !=="rock" && player_2 !== "scissors") {
  player_2 = prompt("Player_2 choose paper, rock or scissors");
}

if (player_1 == player_2) {
  alert("Try again!")
}


else if (player_1 == "paper") {
  if (player_2 == "rock") {
    alert("player_1 won!");
  } else {
    alert("player_2 won!");
  }

} else if (player_1 == "rock") {
  if (player_2 == "paper") {
    alert("player_2 won!");
  } else {
    alert("player_1 won!");
  }
} else if (player_1 == "scissors") {
  if (player_2 == "paper") {
    alert("player_1 won!");
  } else {
    alert("player_ won!");
  }
}




/*6.Given a number n ( n >= 0 ). Print n Fibonacci number.  
(Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2) */
function fibonacci(n){
    let first = 0,
        second = 1;
    if(n == 0){
        alert(0);
    }else if(n == 1){
        alert(1);
    }else{
        let count = 1,
        last = 0;
        while(count < n){
            last = first + second;
            first = second;
            second = last;
            count += 1;
        }
        alert(last);
    }
}
fibonacci(0);
fibonacci(2);
fibonacci(10);
fibonacci(20);
/*7.Given a number n ( n > 0 ). Print Fibonacci series up to n. */
function fibonacci_series(n) {
    let first = 0,
      second = 1;
    let arr = [0, 1];
    let last = first + second;
    if (n <= 0) {
      alert("Please,enter positive number");
    } else {
      while (last <= n) {
        arr.push(last);
        first = second;
        second = last;
        last = first + second;
      }
    }
    alert(arr);
  }
  fibonacci_series(45);

/*8. Write a program, to  calculate the value of the following sequence:
1 - 1/3 + 1/5 - 1/7 + 1/9 + ….. + * 1/n . */

function sequence(n){
    let sum_ = 0;
    let  sign = -1;
    for(let i = 1; i <= n; i += 2 ){
        sign *= -1;
        sum_ += sign * (1 / i);
    }
    alert(sum_);
}
sequence(9);


/*9.  Write a program which will give you all of the potential combinations of a
two-digit decimal combination, printed in a comma delimited format
‘00’, ‘01’, ‘02’, …, ‘98’, ‘99’. */
let arr = [];
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        arr.push(`'${i}${j}'`);
    }
}
alert(arr);



/*10. Insert a number.
Calculate product and sum of the digits of the number. If product is divisible
by the sum, print the quotient, otherwise print the remainder. */
function sum_product_division(number) {
    let sum = 0,
      product = 1,
      i = 0;
    if (number > 0) {
      while (number > 0) {
        i = number % 10;
        number = (number - i) / 10;
        sum += i;
        product *= i;
      }
    }
    let div = product % sum;
  
    if (div == 0) {
      alert((product - div) / sum);
    } else {
      alert(div);
    }
  }
  sum_product_division(22);


  


















