export default function sayHello() {
	return 'Hello World and hi ES6!';
}

class Person {
	constructor(name){
		this.myName = name;
	}

	greet(){
		return 'This is the greet() of Person'
	}
}

class Car extends Person {
	constructor(power){
		super("Tesla");
		this.myPower = power;
	}

	hasPower(){
		return `${this.myName + " has power " + this.myPower + " watt."}`
	}

	greet(){
		return "This is the greet() of Car"
	}

	parentGreet(){
		return super.greet()
	}
}

export {Person, Car};
