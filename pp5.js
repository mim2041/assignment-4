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

const diamonds = gemsToDiamond(100,5,1);
console.log(diamonds);