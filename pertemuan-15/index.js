// Asynchronous JS
// synchronous < (program dari pertemuan 1-15) di sebut dengan single thread(proses) kalau dalam windos itu seperti task manager

//1. synchromous > single thread proses nya bertahap dan akan timbul masalah ketika menuungu proses yang lama
// cosnole.log("proses 1");
// cosnole.log("proses 2");
// console.log("proses yang memakan waktu lama"); // blok
// console.log("proses 4");

//2. asynchronous < multi thread (banyak proses tiap proses meiliki orang nya sendiri)

// pararell (jalan start pada waktu sama sama)
// setTimeout(() => {
//     console.log("proses 1");
// },3000); 

// console.log("proses 2");

// setTimeout(() => {
//     console.log("proses 3");
// },3000); 

// console.log("proses 4");


// // concurent (jalan satu persatu dan saling menunggu hingga proses di atas selesai ,namun pasti kelar semua proses nya)
// setTimeout(() => {
//     console.log("proses 1");
//     setTimeout(() => {
//         console.log("proses 2");
//         setTimeout(() => {
//             console.log("proses 3");
//             setTimeout(() => {
//                 console.log("proses 4"); // asychornous es5 callback hell
//             },3000);
//         },3000);
//     },3000);
// },3000)

//promise janji ada tiga state (wait,aprroe,deaprove) menggunakan yang sudah ada , pada dasar nya class yang di maan kita harus membuat objek mya
//
// let condition = false;
// let newPromise = new Promise((resolve, reject) => {
//     if(condition){
//         resolve("Berhasil");
//     }else {
//         reject("gagal");
//     }
// });

// //pakai promise
// //1. then catch

// newPromise.then((result) => console.log(result));
// newPromise.catch((error) => console.log(error));


//2. async - wait
//harus di buat di dalam fungsi'

// const consumePromise = async () => {
//     let result = newPromise;
//     console.log(result);

// }

// consumePromise();


//Pakai promise yang sudah ada

//1. fetch

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((respone) => respone.json())
// .then((json) => console.log(json));

// (async () =>{
//     let respone = await fetch ("https://jsonplaceholder.typicode.com/users")
//     let json =await respone.json();
//     json.forEach(({name}) => console.log(name));

// })();

//2. axoius  = automatik ipe body json


// Asynchronous JS

// synchronous -> single thread -> blocking
console.log("Proses 1");
console.log("Proses 2");
console.log("Proses yg memakan waktu yg lama");
console.log("Proses 4");

// Asynchronous -> multi thread
// 1. Parallel
setTimeout(() => {
  console.log("Proses 1");
}, 5000);
console.log("Proses 2");
setTimeout(() => {
  console.log("Proses 3");
}, 3000);
console.log("Proses 4");

// 2. Concurent
setTimeout(() => {
  console.log("Proses 1");
  setTimeout(() => {
    console.log("Proses 2");
    setTimeout(() => {
      console.log("Proses 3");
      setTimeout(() => {
        console.log("Proses 4");
      }, 3000);
    }, 3000);
  }, 3000);
}, 3000);

// Promise
let condition = false;
let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

// Pakai Promise
// 1. then - catch
// newPromise
  newPromise.then((result) => result)
  .then((result2) => console.log(result2))
  .catch((error) => console.log(error));

// 2. Async - await
// Harus dibuat dalam fungsi

const consumePromise = async () => {
  try {
    let result = await newPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

consumePromise();

// Pakai Promise yg sudah ada
// 1. Fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

(async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await response.json();
  json.forEach(({ name }) => console.log(name));
})();

//2. Axios
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((result) => console.log(result.data));

(async () => {
  let result = await axios.get("https://jsonplaceholder.typicode.com/users");
  result.data.forEach(({ name }) => console.log(name));
})();