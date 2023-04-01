<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AuthButtons from './components/AuthButtons.vue';
import MyFooter from './components/Footer.vue';
import MyHeader from './components/HeaderLogin.vue';
</script>

<template>
  <div>
    <header>
      <MyHeader>
      </MyHeader>
    </header>
    <main>
      <RouterView>
      </RouterView>
    </main>
    <footer>
      <MyFooter>
      </MyFooter>
    </footer>
  </div>
</template>



<style scoped>
</style>
