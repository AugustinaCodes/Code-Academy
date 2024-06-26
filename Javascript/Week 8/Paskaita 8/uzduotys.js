// Anoniminės ir Arrow funkcijos: Užduotys

// Vardo funkcija
// Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

// const nameFunction = (name) => alert(name);

// console.log(nameFunction("August"));

// Random
// Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

// const generateRandomNumber = () => Math.floor(Math.random() * 5) + 1;

// console.log(generateRandomNumber());

// Raidžių skaičius
// Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

// const fullName = (firstName, lastName) => firstName.length + lastName.length;

// console.log(fullName("August", "B"));

// Abėcėlė
// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

// const convertToLetter = (index) => {
//     const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//     return alphabet [index];
// }

// console.log(convertToLetter(6));

// Matematika
// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

// const maths = (n1, n2, operator) => {
//     if (operator === "sum"){
//         return n1 + n2;
//     } if (operator === "sub"){
//         return n1 - n2;
//     } if (operator === "div"){
//         return n1 / n2;
//     } if (operator === "multi"){
//         return n1 * n2;
//     }
// }

// console.log(maths(5, 5, "multi"));

// Kvadratas
// Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

// const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;
// const squareNum = (num) => num * num

// console.log(squareNum(generateRandomNumber()));

// OR

// const generateRandomNumber = () => Math.floor(Math.random() * 10 + 1);

// const squareNumber = number => Math.pow(number, 2);

// console.log(squareNumber(generateRandomNumber()));