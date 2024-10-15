// Rest parameter dan Spread Operator

//1. Rest parameter (digunakan ketika kita ingin membuat fungsi yang banyak parameter)

// tanpa rest parameter

const func1 = (param1,param2,param3,param4,param5) => {
    console.log(param1,param2,param3,param4,param5);
};

func1("A","B","C","D","E");

// dengan rest parameter (tipe data nya array)

const func2 = (...params) => {
    console.log(params);
};
func2("A","B","C","D","E");

//rest parameter harus berada di terakhir dalam parameter list
// contoh ab di simpan dalam masing masing parameter sisa nya di simpan dalam rest

const func3 = (param1,param2, ...param) => {
    console.log(param);
    console.log(param1,param2);
};
func3("A","B","C","D","E");

//mini exercise

const penjumlahan = (...arr) => {
    
    let hasil = 0;
    arr.forEach((item)=> (hasil += item));
    return hasil;
}; 

console.log(penjumlahan(1,2,3,4,5,6));

//2. Spread Operator ... bukan di parameter

let numbers = [1,2,3,4,5];
console.log(...numbers);
console.log(numbers);

//array
//1. duplikasi array

let numbers2 = [...numbers];
numbers.push(6);
console.log(numbers2);
console.log(numbers);

//2. menggabungkan array

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let numbers3 = arr1.concat(arr2,arr3); //es5
let numbers4 = [...arr1, ...arr2, ...arr3]; //es 6
console.log(numbers3);
console.log(numbers4);

//object
//1.duplikasi objek

const josh = {
    fullName: "joshua",
    age: 21,
};

const josh2 = {...josh, addres: "manado"};

//2. menggabungkan object'

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {d: 5, e: 6};
let combineObj = {...obj1 , ...obj2, ...obj3};

console.log(combineObj);