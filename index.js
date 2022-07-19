// The Fortune Teller

function tellFortune(numChildren, partner, location, job) {
    if (numChildren === 0){
        return `You will be a ${job} in ${location}, and married to ${partner} with no kids.`
    }
    return `You will be a ${job} in ${location}, and married to ${partner} with ${numChildren} kids.`
}

console.log(tellFortune(4, 'Mary', 'Sydney', 'teacher'))
console.log(tellFortune(1, 'Jack', 'Oslo', 'bartender'))
console.log(tellFortune(0, 'Jane', 'Porto', 'lawyer'))


// The Puppy Age Calculator

function calculateDogAge(age){
    const dogAge = age * 7;
    return `Your doggie is ${dogAge} years old in dog years!`;
}

console.log(calculateDogAge(3))

// The Lifetime Supply Calculator

function calculateSupply(age, amountPerDay){
    const maxAge = 85;
    const consume = ((maxAge - age)*365) * amountPerDay;
    return `You will need ${Math.floor(consume)} to last you until the ripe old age of ${maxAge}.`; 
}

console.log(calculateSupply(32,1.76))
console.log(calculateSupply(21,2.56))
console.log(calculateSupply(48,1))


// The Geometrizer

function calcCircumfrence(x) {
    const formulaCirc = (2*Math.PI) * x;
    return `The circumference is ${formulaCirc.toFixed(2)}.`;
}

console.log(calcCircumfrence(4))

function calcArea(x) {
    const formulaArea = (2*Math.PI)*(x**2)
    return `The area is ${formulaArea.toFixed(2)}.`;
} 

console.log(calcArea(2))

// The Temperature Converter

function celsiusToFahrenheit(c) {
    const conversionFormula = ((c/5)*9)+32;
    return `${c}°C is ${conversionFormula.toFixed(2)}°F`;
}

console.log(celsiusToFahrenheit(24))

function fahrenheitToCelsius(f) {
    const conversionFormula = ((f-32)*5)/9;
    return `${f}°F is ${conversionFormula.toFixed(2)}°C`;
}

console.log(fahrenheitToCelsius(64))