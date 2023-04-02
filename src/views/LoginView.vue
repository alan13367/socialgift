<script>
import header from "@/components/Header.vue";
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Submit form logic here
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
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit" class="submit-btn">LogIn</button>
      </form>
    </div>
  </template>
  

  
  <style scoped>

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
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
  