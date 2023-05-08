<template>
    <div class="AuthButtons">
      <button class="login" @click="login">Login</button>
      <button class="signup" @click="signup">Sign Up</button>
    </div>
  </template>
  
 
  
  <style>
  .AuthButtons {
    display: flex;
    align-items: center;
  }
  
  .AuthButtons button {
    margin-left: 20px;
    padding: 8px 16px;
    border: none;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .AuthButtons button:hover {
    background-color: #f5f5f5;
  }
  </style>
  