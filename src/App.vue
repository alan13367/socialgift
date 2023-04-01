<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import AuthButtons from './components/AuthButtons.vue';
import MyFooter from './components/Footer.vue';
import MyHeader from './components/Header.vue';
</script>

<template>
<header>
  <MyHeader></MyHeader>
</header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/signup">SignUp</RouterLink>
        
      </nav>
    </div>
  
  <RouterView />
  <footer>
    <MyFooter>
  </MyFooter>
  </footer>
  
</template>



<style scoped>
</style>
