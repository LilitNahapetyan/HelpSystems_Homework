let y = +prompt("Input digit:");
let x = +prompt("Input number:");

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
contain(x, y);


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
let n = +prompt("Input number");
max_min_difference(n);


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
n = +prompt("Input number");
is_prime(n);















