const addNumber = (...numbers) => {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
export { addNumber};