/*1. Given two variables, which are the angles of a triangle. 
Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).*/
let x = +prompt("Enter the first angel");
let y = +prompt("Enter the second angel");
let z = x + y;
if(z < 180 && x > 0 && y > 0){
    alert(`The third angel is ${180 - z}`)
}else{
    alert("Inputs are invalid");
}

/*2. Given number n (positive integer). Print the value of
n + nn + nnn(not multiplication). */
let n = prompt("Input number");
if (+n > 0 ){
	let sum = +n + (+(n + n)) + (+(n + n + n));
    alert(sum);
}else{
    alert("Input is invalid")
}

/*3. Given a positive integer. 
Bring the last digit of the number to the beginning. Print the new number. 
If the last digit of the inserted number is 0, the number remains the same. */
let last = x.slice(-1);
if(x.length < 2 || last == 0){
    alert(x)
}else{
    x = x.slice(-1) + x.slice(1,-1) + x.slice(0,1);
    alert(x);
}

/*4. Given five numbers as input. 
Calculate and print the average of the numbers(without using arrays). */
let i = 5;
let sum = 0;
while(i > 0){
    sum += +prompt("Input number");
    i -= 1;
}
alert(`The average of the nums is ${sum / 5}`);

/*5. Check if the number is a multiple of 3, 5, or 7 and output the appropriate message. */
let x = prompt("Input number");
let arr = [3,5,7];
let new_arr = [];
i = 0;
while(i < 3){
    if(x % arr[i] == 0){
        new_arr.push(arr[i]);
    }
    i += 1;
}
alert(`Your number is divisible by : ${new_arr}`);

/*6.   Given an age, figure out whether someone is a baby(1 month - 12 months), 
toddler(1 year - 2 years), child(3 years - 12 years ), teenager(13 years - 17years) 
or adult(18 years and more ). Also check that age in months is between 1 and 12. */
let age = +prompt("Input age");
let count = prompt("By year or month");

if(count == "year"){
    age *= 12;
}
if(age >= 1 && age < 12){
    alert("baby");
}else if(age < 24){
    alert("toddler");
}else if(age < 144){
    alert("child");
}else if(age < 216){
    alert("teenager");
}else {
    alert("adult");
}


/*7. Given three numbers.
Sort them by ascending order. */
let arr = [-23,-456,0];
let x = 0;
if (arr[0] > arr [2]){
    x = arr[0];
    arr[0] = arr[2];
    arr[2] = x;
}
if (arr[0] > arr[1]){
    x = arr[0];
    arr[0] = arr[1];
    arr[1] = x;
}
if(arr[1] > arr[2]){
    x = arr[1];
    arr[1] = arr[2];
    arr[2] = x;
}
alert(arr);

/*8. Percentage marks obtained by a student in three exams are to be entered to a
computer. An indication of Pass or Fail is given out after the three marks are entered. */
let x = prompt("Subject 1");
let y = prompt("Subject 2");
let z = prompt("Subject 3");

if(x >= 40 && y >= 40 && z >= 40){
    alert("Pass!");
}else if((x + y + z) / 3 >= 50 && (x >= 40 && y >= 40 || x >= 40 && z >= 40 || y >= 40 && z >= 40 )){
    alert("Pass!")
    }else{
alert("Fail!")}

/*9. Find the sign of the product
of three numbers without a multiplication
operator. Display the specified sign. */
let x = +prompt("Input number");
let y = +prompt("Input number");
let z = +prompt("Input number");

if((x > 0 && y > 0 && z > 0) || 
    (x > 0 && y < 0 && z < 0) || 
        (y > 0 && x < 0 &&  z < 0) || 
            (z > 0 && x < 0 && y < 0)){
                alert("The sign is +");
            }else if (x == 0 || y == 0 || z == 0){
                alert("There is no sign,it is equal to 0");
            }else{
                alert("The sign is -");
            }

/*10  Write a program which will compute the area of a rectangular or a triangle after prompting the user
to type the name of the figure name. Also, check that entered numbers are positive. */
let figure_name = prompt("What is the name of the figure?");
const height = prompt("Input height");
const base = prompt("Input base");

let area = height * base;
if (base > 0 && height > 0){
	if (figure_name == "triangle"){
    	area /= 2;
		}
	alert(`The area of ${figure_name} is ${area}`);
}




