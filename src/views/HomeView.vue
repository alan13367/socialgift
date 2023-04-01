<template>
  <main>
    <div class="background">
      <img src="@/assets/Imagenes/background.png" alt="Imagen de fondo">
    </div>
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
        <img src="@/assets/Imagenes/mobile.png" alt="no image">
      </div>
    </div>
  </main>
</template>

<style scoped>
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

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
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
  font-size: 72px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  max-width: 100%;
}

.subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 28px;
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
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  padding: 12px 40px;
  border-radius: 25px;
  background-color: #0080ff;
  color: #fff;
  margin-bottom: 20px;
}

.video-link {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #0080ff;
}

.video-link i {
  margin-right: 10px;
}

.right-container {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
}

.right-container img {
  width: 100%;
  height: 100%;
}
</style>
