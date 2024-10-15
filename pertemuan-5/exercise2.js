// ubah exercise 1 dari function biasa menjadi IFFE dan callback


//IFFE
(function(berat, tinggi) {
    const bmi = berat / (tinggi * tinggi);
    console.log("BMI saya adalah:", bmi);
  })(80, 1.7);


//callback
function hitungBMI(berat, tinggi, callback) {
    const bmi = berat / (tinggi * tinggi);
    callback(bmi);
  }
  
  hitungBMI(80, 1.7, function(bmi) {
    console.log("BMI saya adalah:", bmi);
  });