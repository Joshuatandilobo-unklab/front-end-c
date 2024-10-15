//life & callback

//IIFE

//no parameter args & retrun value
// (function (){
//     console.log("hello world");

// })();

// //IIFE dengan parameter , args,return value

// let output = (function(fullName) {
//   return "Helloo" + fullName;

// })("joshua");

// console.log(output);

//callback function
// no parameter & args & return value
// function sayHello(callback){
//     callback();
    
    
// }

// sayHello(function(){
//     console.log("Hello callback function");
// });


//with parama , args ,return value

function sayHello(callback){
    let output =  callback("joshua");
    return output;

    
    
}

let output = sayHello(function(fullName){
    return "hello " + fullName;
});

console.log(output);