import sayHello, {Person, Car} from './hello';
import './index.scss';

document.getElementById('root').innerHTML = sayHello();

let person = new Person('Eli');
let car = new Car(500);

document.getElementById('try').innerHTML = person.greet();
document.getElementById('try1').innerHTML = car.greet();
document.getElementById('try2').innerHTML = car.hasPower();

document.getElementById('try3').innerHTML = car.parentGreet();
