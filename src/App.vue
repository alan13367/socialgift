<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AuthButtons from './components/AuthButtons.vue';
import MyFooter from './components/Footer.vue';
import MyHeader from './components/Header.vue';
</script>

<template>
  <body>
      <MyHeader />
    <main>
      <RouterView>
      </RouterView>
    </main>
      <MyFooter />
  </body>
</template>



<style scoped>
</style>
