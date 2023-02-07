// problem: 1
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




// Problem-2
// This function returns the string lengths as even or odd
function evenOdd(str){
    if(str !== '' && typeof str === 'string'){
        const stringLength = str.length;
        if(stringLength % 2 == 0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }
    else{
        return "Please enter a string."
    }
}




// problem-3
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



// Problem-4
// This function takes an array as parameter and checks how many negative numbers are there

function findingBadData(array){
    if( Array.isArray(array) === true){
        let badData = 0;
        for(let i=0; i<array.length; i++){
            if(array[i] < 0){
                badData ++;
            }
        }
        return badData;
    }
    else{
        return "Please enter an array";
    }
}




// problem-5
// This function returns the gems of three friends converting them into diamand. if the total is greater than double of 1000 then the function will return total - 2000 else the function will return the total

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
    if(isNaN(firstFriendGems) === false && typeof firstFriendGems === 'number' && isNaN(secondFriendGems) === false && typeof secondFriendGems === 'number' && isNaN(thirdFriendGems) === false && typeof thirdFriendGems === 'number'){
        firstFriendGemsPower = 21;
        secondFriendGemsPower = 32;
        thirdFriendGemsPower = 43;

        const firstFriendDiamonds = firstFriendGems * firstFriendGemsPower;
        const secondFriendDiamonds = secondFriendGems * secondFriendGemsPower;
        const thirdFriendDiamonds = thirdFriendGems * thirdFriendGemsPower;

        const total = firstFriendDiamonds + secondFriendDiamonds + thirdFriendDiamonds;

        if(total > 2000){
            return total - 2000;
        }
        else{
            return total;
        }
    }
    else{
        return "Please Enter valid Numbers."
    }
}
