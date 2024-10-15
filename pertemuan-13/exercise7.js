// Destructuring (Array)
let kendaraan = ["mobil", "motor", "sepeda"];

let [kendaraan1, kendaraan2, kendaraan3] = kendaraan;

console.log(kendaraan1);
console.log(kendaraan2);
console.log(kendaraan3);

//  Destructuring (Object)
let laptop = {
  merek: "Asus",
  model: "ZenBook",
  tahun: 2023,
};

let { merek, model, tahun } = laptop;

console.log(merek);
console.log(model);
console.log(tahun);

// Destructuring dengan mengambil sebagian item (Array)
let buah = ["apel", "pisang", "jeruk", "anggur"];

let [buah1, , buah3] = buah;

console.log(buah1);
console.log(buah3);

// Destructuring dengan mengambil sebagian item (Objek)
let smartphone = {
  merk: "Samsung",
  tipe: "Galaxy S21",
  warna: "Hitam",
};

let { merk, warna } = smartphone;

console.log(merk);
console.log(warna);

// Destructuring dengan menggunakan default value (Array)
let hewan = ["kucing"];

let [hewan1, hewan2 = "anjing"] = hewan;

console.log(hewan1);
console.log(hewan2);

// Destructuring dengan menggunakan default value (Object)
let buku = {
  judul: "Pemrograman JavaScript",
};

let { judul, penulis = "Anonim" } = buku;

console.log(judul);
console.log(penulis);

// Destructuring dengan menggunakan rest operator (Array)
let angka = [1, 2, 3, 4, 5];

let [angka1, angka2, ...angkaLainnya] = angka;

console.log(angka1);
console.log(angka2);
console.log(angkaLainnya);

// Destructuring dengan menggunakan rest operator (Object)
let mobil = {
  merk1: "Toyota",
  model: "Camry",
  warna: "Putih",
};

let { merk1, ...detailLainnya } = mobil;

console.log(merk1);
console.log(detailLainnya);

// Dengan menggunakan konsep destructuring coba anda cari di exercise6 bagian mana yang bisa diubah dengan destructuring.

//Menggunakan Destructuring

// 1
const calculateAge = (birthYear) => 2019 - birthYear;
//Destructuring Object
const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

const people = [{ year: 1987, firstName: "John" }];
//Destructuring Array
const [john] = people;

yearUntilRetirement(john);

// 2
//rest operator
const addNumber = (...numbers) => {
  //mengambil 4 angka pertama
  const [first, second, third, fourth] = numbers;
  let sum = 0;
  //menjumlahkan hanya 4 angka saja
  [first, second, third, fourth].forEach((number) => {
    sum += number;
  });

  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3
const phi = 3.14;

const calculateArea = ({ radius = 1, power = 2 }) =>
  phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

// Menggunakan fungsi dengan radius yang tidak didefinisikan untuk demonstrasi default value
const areaDefault = calculateArea({}); // Menggunakan default value untuk radius dan power

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
console.log(`Area with default radius: ${areaDefault}`); // menampilkan default value

// 4
const makeAjaxRequest = (url, method = "GET") => {
  console.log(`${url}, ${method}`);
};

makeAjaxRequest("www.google.com");
