<template>
<<<<<<< HEAD

  <Header />
  <main>
  <img src="background.png" alt="Imagen de fondo" class="background">
  <div class="container">
    <div class="left-container">
      <h2 class="title">La mejor manera de gestionar tus regalos</h2>
      <h3 class="subtitle">Prioriza y crea un presupuesto para cada ocasión. Comunícate con tus amigos para no repetir.</h3>
      <div class="button-container">
        <button class="start-button">Empezar</button>
        <a href="#" class="video-link"><i class="fas fa-play"></i> Video introducción</a>
      </div>
    </div>
    <div class="right-container">
      <img src="mobile.png" alt="Imagen de la aplicación en un dispositivo móvil">
    </div>
=======
  <div>
    <Header />
    <main>
      <img src="@/assets/logo.png" alt="Vue logo" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </main>
    
>>>>>>> a9ce0e2e85d9a07bd5a788327d8c59513f80fcac
  </div>
  </main>
  <Footer />
</template>


<script>
import Header from "@/components/HeaderLogIn.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "View",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.left-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Inter', sans-serif;
  font-size: 72;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  max-width: 100%;
}

.subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 28;
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
  max-width: 100%;
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.start-button {
  font-family: 'Inter', sans-serif;
  font-size: 24;
  font-weight: 600;
  text-align: center;
  padding: 12 40;
  border-radius: 25;
  background-color: #0080ff;
  color: #fff;
  margin-bottom: 20px;
}

.video-link {
  font-family: 'Inter', sans-serif;
  font-size: 24;
  font-weight: 600;
  text-align: center;
  color: #0080ff;
}

.video-link i {
  margin-right: 10;
}

.right-container {
  width: 50%;
}

.right-container img {
  width: 100%;
  height: auto;
}
</style>