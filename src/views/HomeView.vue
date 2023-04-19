<template>
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
</template>

<style scoped>


.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  width: 80%;
  margin-left: 10%;
  margin-top: 5%;
}

.left-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.title {
  font-family: 'Inter', sans-serif;
  font-size: 72;
  font-weight: 600;
  text-align: left;
  margin-bottom: 30;
  max-width: 100%;
}

.subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 28;
  font-weight: 400;
  text-align: left;
  margin-bottom: 50;
  max-width: 60%;
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}

.start-button {
  font-family: 'Inter', sans-serif;
  font-size: 24;
  font-weight: 600;
  text-align: left;
  padding: 12px 40;
  border-radius: 25;
  background-color: #0080ff;
  color: #fff;
  margin-bottom: 20;
}

.video-link {
  font-family: 'Inter', sans-serif;
  font-size: 24;
  font-weight: 600;
  text-align: left;
  color: #0080ff;
}

.video-link i {
  margin-right: 10;
}

.right-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 32;
}

.right-container img {
  width: 45%;
  height: 45%;
}
</style>
