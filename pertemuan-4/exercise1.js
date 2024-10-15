function hitungBMI (berat,tinggi) {
    

    const bmi = berat/ (tinggi*tinggi);
    return bmi; 
}

    const beratSaya = 80; //dalam kg
    const tinggiSaya = 1.7; //dalam meter

    const bmiSaya = hitungBMI(beratSaya,tinggiSaya);
    console.log("BMI saya adalah :",bmiSaya);