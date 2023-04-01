<script>
import header from "@/components/Header.vue";
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
      // Submit form logic here
    },
  },
};
</script>

<header>
</header>
<template>
    <h2>Sign Up</h2>
    <div class="signup-container">
      <form class="signup-form" @submit.prevent="submitForm">
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
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  

  
  <style>
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  </style>
  