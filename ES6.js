// function printMe() {     console.log('I am a function'); } printMe(); let two
// = () => {     console.log('Second function'); } two();
// ------------------------------------------------------- let addMe = (a, b) =>
// {     return a+b; } console.log(addMe(5,5));
// ------------------------------------------------------- let getData =
// (temperature, cold = 10) => {     if (temperature < cold) {         return
// 'This is cold.'     } else {         return 'This is not so cold.'     } }
// console.log(getData(5));
// ------------------------------------------------------- Dynamic Object
// Creation let score = 100; let wrath = "angry"; let myObj = {     user:
// 'John',     score: 250,     angry: 99,     highScore(){ console.log('Your
// score is ' + this.score);     } }; console.log(myObj);
// console.log(myObj.user); console.log(myObj.highScore());
// console.log(myObj[wrath]);
// ------------------------------------------------------- For of Loop let cars
// = ['BMW', 'TOYOTA', 'AUDI']; let string = "ThisIsAString"; for(let car of
// cars) {     console.log(car); } for(letter of string) { console.log(letter);
// } ------------------------------------------------------- REST & SPREAD
// Operators SPREAD: Converts the list into an Array. REST: Converts array into
// a list. let deposit = (...money) => {     console.log(money);     let
// balance = 0;     for(let i = 0; i< money.length; i++ ) {         balance +=
// money[i];     }     return balance; } console.log(deposit(100,200,300)); let
// addMoney =[10,20,30]; console.log(...addMoney);
// console.log(Math.max(...addMoney));
// ------------------------------------------------------- MAP: Can store key
// value paris. let pikachu = {     name: 'Pikachu',     power: 'lightning' }
// let clifary = {     name: 'Clifary',     power: 'NaN' } let charmander = {
// name: 'Charmander',     power: 'Fire' } let pokemon = new Map();
// pokemon.set('pika', pikachu); pokemon.set('cliff', clifary);
// pokemon.set('char', charmander); console.log(pokemon.size);
// console.log(pokemon.get('char')); //Access all keys
// console.log(pokemon.keys()); for(key of pokemon.keys()) { console.log(key); }
// for(val of pokemon.entries()) {     console.log(val); }
// ------------------------------------------------------- SET Operator: Lets
// you store unique values of any type primitive values or object references.
// let marvel = new Set(['Batman', 'Flash', 'Batman']); marvel.add('Superman');
// console.log(marvel); for(m of marvel) {     console.log(m); }
// console.log(marvel.has('Flash'));
// ------------------------------------------------------- STATIC FUNC, GETTER,
// SETTERS class Uber {   static sayHi = () => {         console.log('This is a
// static function');     } } class Driver {     constructor(name) {
// //GETTER/SETTERS: Allows to control what goes in and out of a class. //Access
// the private members of a function. Use the _         this._name = name;     }
//     get myName() {         return this._name;     }     set myName(val) {
//     this._name = val;     } } let driver = new Driver('John');
// console.log(driver.myName); driver.myName = 'Bob';
// console.log(driver.myName);
// ------------------------------------------------------- SYMBOLS: Allows for
// the keys in an object to be unique let sym1 = Symbol('Batman'); let sym2 =
// Symbol('Batman'); console.log(sym1); console.log(sym1 === sym2); let obj = {
//   name: 'Bruce',     ability: 'detective',     [sym1]: 1234 }
// console.log(obj); console.log(obj[sym1]); //USE CASE 1: const COLOR =
// Symbol('Red'); //Ths will always be unique because its being given a unique
// value of red. -------------------------------------------------------