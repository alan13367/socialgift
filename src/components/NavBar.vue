<template>
    <nav>
      <div class="logo-buttons">
        <div class="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div class="buttons">
          <button @click="explore">Explore</button>
          <button @click="friends">Friends</button>
          <button @click="chat">Chat</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      explore() {
        // code to handle explore button click
      },
      friends() {
        // code to handle friends button click
      },
      chat() {
        // code to handle chat button click
      },
    },
  };
  </script>
  
  <style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 50px;
    background-color: #f5f5f5;
  }
  
  .logo img {
    height: 75px;
  }
  
  .buttons button {
    margin-left: 20px;
    padding: 8px 16px;
    border: none;
    background-color: #0077ff;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .buttons button:hover {
    background-color: #0066cc;
  }
  </style>
  
  