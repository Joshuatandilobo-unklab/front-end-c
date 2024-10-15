// //A . array
// let people = ["Greg", "Mary", "Devon", "James"];

// //1. for loop
// for ( let i = 0; i<people.length; i++){
//     console.log(people[i]);
// }

// //2. for each
// people.forEach(function(person){
//     console.log(person);
// });

// //3. remove greg
// people.shift();
// console.log(people);

// //4. remove james
// people.pop();
// console.log(people);

// // 5. tambah matt
// people.unshift("Matt");
// console.log(people);

// // 6. tambah your name
// people.push("Joshua");
// console.log(people);

// // 7. exit from mary
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Mary") {
//         break;
//     }
// }

// // 8. not include mary or matt
// let newPeople = people.slice(2);
// console.log(newPeople);

// // 9. Redefine the people variable with the original value. Using the splice command, remove "Devon" and add "Elizabeth" and "Artie".
// people = ["Matt", "Mary", "Devon", "Joshua"];
// people.splice(2, 1, "Elizabeth", "Artie"); 
// console.log(people); 


// // 10. buat variable baru  withBob and set it equal to the people array concatenated with "Bob".
// let withBob = people.concat("Bob");
// console.log(withBob);



//B. Objek


// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// // 1. Write the command to add the language "Go" to the end of the languages array.
// programming.languages.push("Go");
// console.log(programming.languages); 

// // 2. By using the bracket notation, change the difficulty to the value of 7.
// programming["difficulty"] = 7;
// console.log(programming.difficulty); 

// // 3. Using the delete keyword, write the command to remove the jokes key from the programming object.
// delete programming.jokes;
// console.log(programming); 

// // 4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
// programming.isFun = true;
// console.log(programming); 

// // 5. Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, …”.
// let updatedLanguages = programming.languages.map((language, index) => '${index} - ${language}');
// console.log(updatedLanguages);