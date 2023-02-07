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

const array = [-4, -9, -5, -33, -55 ];
const badData = findingBadData(array);
console.log(badData);