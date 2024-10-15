// javascripit function
// cara 1
// tanapa input(parameter dan output)
// function greetings1() {
//     console.log("hello world");
// }
// greetings1();//call function

// //cara 2
// //fungsi yang di simpan dalam variabel

// let greetings2 = function() {
//     console.log("hello world");
// }
// greetings2();// call function

//definsi fungsi ini harus di panggil karena ada nama

//parameter dan argument
//dengan input (parameter) dan output (return value) return untuk nilai otpu

                
// function greetings1(fullName) { // parameter
//     return 'hello' + fullName;

// }
// let output = greetings1("joshua"); //argument intput nilai yang di berikan ke parameter

// console.log(output);

// let greetings2 = function(fullName) {
//     return "hello" + fullName;
// }
// let output2 = greetings2("joshua");
// console.log(output2);

// istilah dalam javascript function hoisting kita bisa panggil lebih dulu berlaku pada cara 1


// lingkup global vs lingkuo lokal semua yang ada dalam kurung awall di sebut blok (if,else ,function)

// let x = 10; //global
// function foo(){
//     let y = 20; //local
//     let z = 30;
//     console.log(x); //10
//     console.log(y); //20
//     if(z > x) {
//         let a = 40; //local
//         console.log(a); //40
//     }
//     console.log(a); //error

// }

// //console.log(y); //error
// foo();
