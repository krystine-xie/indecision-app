class Person {
    constructor(name = 'Anonymous', age =  0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major; 
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription(); 
        if (this.hasMajor()) {
            description += ` I am majoring in ${this.major}.`
        } else {
            description += ` I am still undecided on what to major.`
        }
        return description; 
    }
}

class Traveller extends Person {
    constructor (name, age, homeLocation = 'nowhere') {
        super(name, age);
        this.homeLocation = homeLocation; 
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }
    
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Traveller('Krystine Xie', 28, 'Montreal'); 
console.log(me.getGreeting()); 

const other = new Traveller(); 
console.log(other.getGreeting());