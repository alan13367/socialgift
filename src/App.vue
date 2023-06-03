<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import MyHeader from './components/Header.vue';


  
</script>

<template>
    <MyHeader /> 
    <main>
      <div class="background">
      <img src="@/assets/Imagenes/background.png" alt="Imagen de fondo">
      </div>
      <RouterView />
    </main>
    
    <Footer />
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
    display: flex;
    height: 78%;
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

.menu-button {
  display: none;
}

.menu {
  display: flex;
  justify-content: flex-end;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.menu li {
  margin-left: 10px;
}

@media (max-width: 600px) {
  main {
    height: auto;
    flex-direction: column;
    align-items: center;
  }

  .background {
    position: static;
  }

  .background img {
    object-fit: contain;
  }


  .menu-button {
    display: block;
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .menu {
    display: none;
    position: absolute;
    top: 40px;
    right: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }

  .menu-open {
    display: block;
  }

  .menu ul {
    flex-direction: column;
  }

  .menu li {
    margin: 5px 0;
  }
}


</style>
