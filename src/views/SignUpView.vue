<script>
export default {
  data() {
    return {
      name: '',
      lastName: '',
      email: '',
      password: '',
      imageUrl: '',
    };
  },
  methods: {
    submitForm() {
      const url = 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/users';
      const data = {
        name: this.name,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        image: this.imageUrl
      };
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.status === 201) {
          this.$router.push('/mywishlists');
          response.json().then(data => {
            localStorage.setItem('userData', JSON.stringify(data));
            localStorage.setItem('loggedIn', true);
            console.error(data.id);
          });
        } else if (response.status === 400) {
          console.error('Error de la web: ' + response.statusText);
        } else if (response.status === 406) {
          console.error('Faltan parámetros en la solicitud');
        } else if (response.status === 409) {
          console.error('El correo electrónico ya existe');
        } else if (response.status === 500) {
          console.error();('Usuario no creado');
        } else if (response.status === 501) {
          console.error('Error de la web: ' + response.statusText);
        }
      })
      .catch(error => {
        console.log('Error en la solicitud: ' + error);
      });
    },
  },
};
</script>


<template>
    <div class="login-container">
      <div class="imageneslogin">
        <img src="@/assets/Imagenes/facebooklogin.png" alt="">
        <img src="@/assets/Imagenes/googlelogin.png" alt="">
        <h2>Or</h2>
      </div>
      <form class="login-form" @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
  
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" v-model="lastName" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <label for="image-url">Image URL:</label>
        <input type="url" id="image-url" v-model="imageUrl" required>
  
        <button type="submit" class="submit-btn">Sign Up</button>
      </form>
    </div>
  </template>
  
  <style scoped>
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

    }

    .imageneslogin {
      display: flex;
      padding-bottom: 5ch;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 100%;
    }

    .imageneslogin img {
    margin-bottom: 10px; 
    padding: 10px; 
    }
    
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: left;
      width: 100%;
      max-width: 100%;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      background-color: #fff;
    }
    
    .login-form h2 {
      margin-bottom: 20px;
    }
    
    .login-form label {
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    .login-form input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
      margin-bottom: 20px;
    }
    
    .submit-btn {
      background-color: #A33DA5;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
    
    @media screen and (min-width: 768px) {
      .login-form {
        max-width: 500px;
      }
    }
  </style>
  