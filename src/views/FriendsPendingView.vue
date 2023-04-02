<template>
  <main>
  <div class="background">
    <img src="@/assets/Imagenes/background.png" alt="Imagen de fondo">
  </div>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" placeholder="Search for gifts...">
    <button @click="search">Search</button>
  </div>
  <div class="container">
    <div class="left-container">
      <h3>Solicitudes pendientes</h3>
      <ul>
        <li v-for="request in pendingRequests" :key="request.id">
          <button @click="acceptRequest(request)">Aceptar</button>
          <span>{{ request.name }}</span>
        </li>
      </ul>
    </div>
    <div class="right-container">
      <h3>Envíos pendientes</h3>
      <ul>
        <li v-for="request in pendingSends" :key="request.id">
          <button @click="markAsPending(request)">Pendiente</button>
          <span>{{ request.name }}</span>
        </li>
      </ul>
    </div>
  </div> 
  </main>
</template>
<style scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

  .background {
    position: absolute;
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    position: relative;
    z-index: 1;
  }

  .left-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  h3 {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 30px;
    max-width: 100%;
  }

  .right-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 32px;
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
</style>

 <script>
  export default {
    data() {
      return {
        request: [
          {
            id: 1,
            name: 'Friends1',
            image: '',
          },
          {
            id: 2,
            name: 'Friends2',
            image: 'gift2.png',
          },
          {
            id: 3,
            name: 'Friends3',
            image: 'gift3.png',
          },
        ],
        searchQuery: '',
      }
    },
    methods: {
      giftIt(gift) {
        // Add gift giving logic here
      },
      search() {
        // Add search logic here
      },
    },
    computed: {
      filteredGifts() {
        return this.gifts.filter(gift => gift.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
      },
    },
  }
  </script>