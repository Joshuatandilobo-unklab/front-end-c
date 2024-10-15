//1. let & const
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({year, firstName}) => {
    const age = calculateAge(year);
    const retirement = 60 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
    } else {
      console.log(`${firstName} is already retired.`);
    }
  }
  
  yearUntilRetirement({year: 1987, firstName: 'John'});

  export {calculateAge, yearUntilRetirement};