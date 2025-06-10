const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen / 156.5) * 0.87;
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

console.log(fromYenToPound(1))
console.log(fromDollarToYen(1))
console.log(fromEuroToDollar(1))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

