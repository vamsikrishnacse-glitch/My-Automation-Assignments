//NumberType
function numberType(number){
    let value = number;
    if (value > 0){
        return "Positive";
    } else if(value < 0) {
        return "Negative";
    }else {
        return "Zero"
    }
}

console.log( numberType(10));
console.log( numberType(-8));
console.log( numberType(0));