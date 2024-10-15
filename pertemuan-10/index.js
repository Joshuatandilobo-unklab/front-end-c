// string literal and Arrow function , default parameter

// belajar fitur fitur yang ad di s6

// 1. string literal

let fullName = "joshua";
let age = 21;
let address = "timika";

//halo nama saya joshua ,umur 21 tahun dan saya lahir di timika

let kalimat = "hallo nama saya " + fullName + ",umur saya " + age + " Saya lahir di " + address + ".";
console.log(kalimat);

let kalimat2 = `hallo nama saya ${fullName}, umur saya ${age} tahun dan saya lahir di ${address}`;
console.log(kalimat2);

//2 . arrow function
function sayGreetings(fullName) {
    return `hello ${fullName}`;
}

console.log(sayGreetings("joshua"));

// const sayGreetings2 = (fullName) => {
//     return `hello ${fullName}`;
// }

// console.log(sayGreetings2("joshua"));

//Impicit return value

const sayGreetings2 = (fullName) =>  `hello ${fullName}`;
    

// arrow function iffe
let output = (() => `hello`)();
console.log(output);

// arrow function callback
let numbers = [1,2,3,4,5];
let output2 = numbers.map((item) => item);

console.log(output2);

// 3.default parameter

const sayGreetings3 = (fullName) => {
    if(fullName === undefined){
        fullName = "nijika";
    }
    if(age === undefined){
        age = 22;
    }
    console.log(`hello ${fullName} umur saya ${age}`);
};



const sayGreetings4  =(fullName = "joshua", age = 21, address = "timika") => 
    console.log(`halo nama saya ${fullName} umur saya ${age} saya lahir di ${address}`);
  
    
    

sayGreetings4();