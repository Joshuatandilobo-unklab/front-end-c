//1 promise

function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  async function messages() {
    const msg = await helloWorld();
    console.log(msg);
  }
  
  messages();

//2. fetch

function ambilDataUser() {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        data.data.forEach(user => {
          console.log(`Nama Depan: ${user.first_name}, Nama Belakang: ${user.last_name}`);
        });
      });
  }
  
  ambilDataUser();

  //3. Async Await

  async function ambilDataUser() {
    try {
      const response = await fetch('https://reqres.in/api/users');
      const data = await response.json();
  
      data.data.forEach(user => {
        console.log(`Nama Depan: ${user.first_name}, Nama Belakang: ${user.last_name}`);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  ambilDataUser();

  //4.axios

  // Axios

 const ambilDataUserAxios = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      const users = response.data;
      users.data.forEach((user) => {
        console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  export {ambilDataUserAxios};