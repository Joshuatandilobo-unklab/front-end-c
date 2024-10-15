//Array & objek

// array = sebgai wadah variabel yang bisa menampung berbagai macam tipe data, jadi klo kita mau menyimpan data yang banyak pake array
// 1. array
// deklarasi variabel array
// cara 1. array literal

// let numbers = [1,2,3,4,5];
// console.log(numbers);

// //car 2. kata kunci new

// let numbers2 = new Array(6,7,8,9,10);
// console.log(numbers2);

// tipe data dalam array
// let numbers = [1,2,3,4,5]; //numbers
// let students = ["joshua","jonald","grivin"]; // string
// let nijika = ["nijika", 16 , true ,[1,2,3]]; // campuran
// console.log(nijika);

// // array length

// console.log(numbers.length);
// console.log(students.length);
// console.log(nijika.length);

//mengakses element tertentu dalam array
// melalui index setiap elemen punya index untuk akses spesifik

// console.log(numbers[2]);//
// console.log(students[1]);//
// console.log(nijika[3]);//
// console.log(nijika[3][1]);//

//mengakses elemen terakhir dalam array
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(numbers[numbers.length - 1]);

// // array method to string()
// let array = [1,2,3,"ah syall",false,true];
// console.log(array);
// // to string()
// console.log(array.toString());
// //to join()
// console.log(array.join(" "));
// console.log(array.join("-"));
// //pop()
// array.pop();
// console.log(array);

// //push
// array.push("ah nijika");
// console.log(array);

// //shift
// array.shift(); 
// console.log(array);

// // unshift
// array.unshift("selamat pagi bocchi");
// console.log(array);

// //spilce
// array.splice(3, 0, 4, 5);
// console.log(array);

// //concatination()
// let buah = ['pisang','apel','jeruk'];
// let sayur = ['tomat','bayam','wortel'];
// let biji = ['kedelai','kacang tanah','kacang polong'];

// let makanan = buah.concat(sayur,biji);
// console.log(makanan);

// //slice()
// let sayuran = makanan.slice(3,6);
// console.log(sayuran);

