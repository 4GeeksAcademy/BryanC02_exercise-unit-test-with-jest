// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
/* first way
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26168224299064 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // 1 euro = 1.07 dollars, example value(3.5 dollars), (3.5 / 1.07) making dollars to euro.
    // 3.745 euros to Yen is * 156.5  ==>  (3.745 * 156.5)
    const expected = (3.5 / 1.07) * 156.5; 
    
    // This is the comparison for the unit test
     expect(yen).toBe(expected);
})

test("One Yen should be 0.0.0055591054313099035", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pound = fromYenToPound(3.5);

    // 1 euro = 156.5 yen, example value(3.5 yen), (3.5 yen / 156.5) making yen to euro.
    // 547.75 euros to pound is * 0.87  ==>  547.75 * 0.87
    const expected = (3.5 / 156.5) * 0.87; 
    
    // This is the comparison for the unit test
     expect(pound).toBe(expected);
})
*/

const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("One euro should be 1.07 dollars", function() {   
    const { fromEuroToDollar } = require('./app.js');
    const euros = fromEuroToDollar(3.5); // 3.5 euros is example value
    const expected = 3.5 * oneEuroIs.USD;
    expect(euros).toBe(expected); // Result should be 1.07 dollars
})

test("One dollars should be 146.26168224299064 Yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(3.5); // 3.5 dollars is example value
    const expected = (3.5 / oneEuroIs.USD) * oneEuroIs.JPY;
    expect(dollars).toBe(expected); // Result should be 146.26168224299064 Yen
})

test("One Yen should be 0.0.0055591054313099035 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound(3.5); //3.5 yen is example value
    const expected = (3.5 / oneEuroIs.JPY) * oneEuroIs.GBP;
    expect(yen).toBe(expected); // Result should be 0.0.0055591054313099035 pounds
})