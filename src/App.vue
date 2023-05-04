<script setup>
import { RouterLink, RouterView } from 'vue-router';
import MyFooter from './components/Footer.vue';
import MyHeader from './components/Header.vue';



</script>

<template>
     <div>
    <header>
      <MyHeader />
    </header>
  </div>
  <body>
    <main>
      <div class="background">
      <img src="@/assets/Imagenes/background.png" alt="Imagen de fondo">
    </div>
      <RouterView>
      </RouterView>
    </main>
    <footer>
      <MyFooter />
    </footer>
</body>
  
</template>



<style>
html, body {
    margin: 0;
    height: 100%;
}
body {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr;
    grid-template-areas: "main" "footer";
    grid-template-rows: 1fr 80px;
    
}

main {
    grid-area: main;
}
footer {
    background-color: #7E57C2;
    grid-area: footer;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
