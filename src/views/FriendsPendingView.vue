<template>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" placeholder="Buscar amigos">
    <button @click="search">Buscar</button>
  </div>
  <div class="container">
    <div class="left-container">
      <div class="section-header">
        <h3>Solicitudes pendientes</h3>
      </div>
      <div v-for="item in leftItems" :key="item.id" class="item">
        <button @click="acceptFriendRequest(item.id)">Aceptar Amistad</button>
        <img class="imgfriends" src="@/assets/Imagenes/friends.png" alt="friends">
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="right-container">
      <div class="section-header">
        <h3>Resultados de búsqueda:</h3>
      </div>
      <div class="scroll-container">
        <div v-for="item in rightItems" :key="item.id" class="item">
          <button @click="sendFriendRequest(item.id)">Solicitar amistad</button>
          <button @click="viewProfile(item.id)">Ver perfil</button>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      leftItems: [],
      rightItems: [],
      ProfileView: null,
    }
  },
  created() {
    this.getFriendRequests();
  },
  methods: {
    getFriendRequests() {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/requests', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 401) {
            console.log('Fallo en el token');
          } else {
            console.log('Error Api');
          }
        })
        .then(data => {
          localStorage.setItem('friendsrequest', JSON.stringify(data));
          this.leftItems = data.map(item => {
            return {
              id: item.id,
              name: `${item.name} ${item.last_name}`
            }
          });
        })
        .catch(error => console.log(error));
    },
    search() {
      fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/search?s=${this.searchQuery}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 401) {
            console.log('Fallo en el token');
          } else {
            console.log('Error Api');
          }
        })
        .then(data => {
          localStorage.setItem('searchResults', JSON.stringify(data));
          this.rightItems = data.map(item => {
            return {
              id: item.id,
              name: `${item.name} ${item.last_name}`
            }
          });
        })
        .catch(error => console.log(error));
    },
    sendFriendRequest(id) {
      localStorage.setItem('idfriend', id);
      fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/${id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'accept': 'application/json'
        },
        body: ''
      })
        .then(response => {
          if (response.status === 201) {
            console.log('Solicitud enviada');
          } else if (response.status === 400) {
            console.log('Solicitud erronea');
          } else if (response.status === 401) {
            console.log('Fallo en el token');
          } else if (response.status === 409) {
            console.log('La solicitud ya está registrada a este amigo');
          } else if (response.status === 410) {
            console.log('El id de usuario no existe');
          } else {
            console.log('Error Api');
          }
        })
        .catch(error => console.log(error));
    },
    viewProfile(idfriend) {
      localStorage.setItem('ProfileView', idfriend);
      this.$router.push({ path: '/FriendsProfile' });
    },
    acceptFriendRequest(id) {
      fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'accept': 'application/json'
        },
        body: ''
      })
        .then(response => {
          if (response.status === 200) {
            console.log('Solicitud Aceptada');
            location.reload();
          } else if (response.status === 400 || response.status === 406 || response.status === 500 || response.status === 502) {
            console.log('Error en solicitud');
          } else if (response.status === 401) {
            console.log('No autorizado');
          } else if (response.status === 410) {
            console.log('El usuario no existe');
          }
        })
        .catch(error => console.log(error));
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

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.section-header h3 {
  margin: 0;
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

.scroll-container {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
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
  width: 90%;
  height: 10%;
  margin: 0 auto 30px auto;
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

@media (max-width: 767px) {
  .search-bar {
    width: 70%;
  }
  .right-container{
    width: 80%;
  }
  .left-container{
    width: 80%;
  }
}
</style>