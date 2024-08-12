// ! 1 Задание: Напишите функцию sayHello, которая принимает один параметр name типа string и возвращает строку приветствия.
function sayHello(Name) {
    return "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(Name);
}
sayHello('Alisa');
// ! 2 Задание: Напишите функцию addNumbers, которая принимает два параметра num1 и num2 типа number и возвращает их сумму.
function addNumbers(one, two) {
    return one + two;
}
addNumbers(1, 2);
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age, " ");
}
var person = {
    firstName: "Adlan",
    lastName: "Saidov",
    age: 25,
};
var fullName = getFullName(person);
console.log(fullName);
function getDistance(point1, point2) {
    var Dx = point2.x - point1.x;
    var Dy = point2.y + point1.y;
    return Math.sqrt(Dx * Dx + Dy * Dy);
}
var point1 = { x: 10, y: 2 };
var point2 = { x: 4, y: 60 };
var distance = getDistance(point1, point2);
console.log(distance);
