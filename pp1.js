// This function returns a number that undergoes 4 operations, multiply the number with 3, then add 10 with the number, divide the number by 2 and substract 2 from the number and return the answer.

function mindGame(number){
    if(isNaN(number) == false && typeof(number) === 'number'){
        let answer = number *3;
        answer +=10;
        answer /= 2;
        answer -= 5;
        return answer;
    }
    else{
        return "Please Enter a valid Number."
    }
}

const number = mindGame(50);
console.log(number);