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

const str = 'as';
const even_odd = evenOdd(str);
console.log(even_odd);