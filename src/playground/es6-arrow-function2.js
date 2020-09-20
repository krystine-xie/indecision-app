// arguments object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55,1));


// this keyword - no longer bound 

const user = {
    name: 'Krystine',
    cities: ['Montreal', 'Mountain View', 'Melbourne'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city => {
            return this.name + ' has lived in ' + city; 
        }));
       return cityMessages;
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [5, 7, 12, 45],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply())