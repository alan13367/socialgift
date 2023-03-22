<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import AuthButtons from './components/AuthButtons.vue';

</script>

<template>
  <header>
    <div>
      <NavBar></NavBar>
      <AuthButtons></AuthButtons>
    </div>
  </header>
  
  <RouterView />
</template>

<style scoped>
</style>
