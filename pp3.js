// This function shows a comparison between a specific number an 7. if the difference between the two number is less than 7, then the difference will be returned else the input will be doubled.

function isLGSeven(number){
    if(isNaN(number) == false && typeof(number) !== 'string'){
        const difference = number - 7;
            if(difference < 7){
                return difference;
            }
            else{
                return number*2;
            }
    }
    else{
        return "Please Enter a valid Number."
    }
}

const number = 15;
const isLarge = isLGSeven(number);
console.log(isLarge);