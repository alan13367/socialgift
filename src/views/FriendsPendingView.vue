<template>
  <main>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search for gifts...">
      <button @click="search">Search</button>
    </div>
    <div class="container">
      <div class="left-container">
        <h3>Solicitudes pendientes</h3>
        <div v-for="item in leftItems" :key="item.id" class="item">
          <button>Aceptar</button>
          <img class="imgfriends" src="@/assets/Imagenes/friends.png" alt="friends">
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="right-container">
        <h3>Envíos pendientes</h3>
        <div v-for="item in rightItems" :key="item.id" class="item">
          <button>Pendiente</button>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div> 
  </main>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      leftItems: [
        { id: 1, name: 'Nombre Completo 1' },
        { id: 2, name: 'Nombre Completo 2' },
        { id: 3, name: 'Nombre Completo 3' },
        { id: 4, name: 'Nombre Completo 4' },
      ],
      rightItems: [
        { id: 1, name: 'Nombre Completo 5' },
        { id: 2, name: 'Nombre Completo 6' },
        { id: 3, name: 'Nombre Completo 7' },
        { id: 4, name: 'Nombre Completo 8' },
      ],
    }
  },
  
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 80%;
  width: 80%;
  margin-left: 10%;
  margin-top: 5%;
  position: relative;
  z-index: 1;
}

.left-container {
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.right-container {
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 32px;
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

img.imgfriends {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 30px;
  max-width: 100%;
}

  .search-bar {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    margin-bottom: 30px;
  }

  input[type="text"] {
    width: 70%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    outline: none;
    margin-right: 10px;
  }

  button {
    background-color: #7C3AED;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    padding: 10px 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: #5b2eab;
  }

  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }

  .item p {
    margin: 0;
    margin-left: 10px;
  }
</style>