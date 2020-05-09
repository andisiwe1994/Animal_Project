class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " eats")
    }
    sounds() {
        console.log("Sound...")
    }
}

class Dog extends Animal {
    sounds() {
        console.log("Dog barks")
    }
}

class Cat extends Animal {
    sounds() {
        console.log("Cat meows")
    }
}


var dog = new Dog(`Rax`);

dog.eat();
dog.sounds();

var cat = new Cat(`Storm`);

cat.eat();
cat.sounds();

class Home {
    constructor() {
        this.array = new Array();
    }

    adoptPet(anyAnimal) {
        if (!this.array.includes(anyAnimal))
            this.array.push(anyAnimal);
        else
            console.log("Not ok at all");
    }

    makeAllSounds() {
        for (var i = 0; i < this.array.length; i++) {
            this.array[i].sounds();
        }
    }
}

var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();

home.makeAllSounds();
console.log("...............");

home.adoptPet(dog1);
home.makeAllSounds();
console.log("...............");

home.adoptPet(cat);
home.makeAllSounds();
console.log("...............");

home.adoptPet(dog2);
home.makeAllSounds();
console.log("...............");

home.adoptPet(dog1);
