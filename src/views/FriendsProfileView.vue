<script>

export default {
  data() {
    return {
      profileId: null,
      profileData: null,
      wishlists: [],
      chunkedWishlists: [],
      showConfirmationDialog: false,
      ProfileView: null,
    };
  },
  created() {
      this.fetchProfileData();
      this.getWishlists(); 
  },
  methods: {
    fetchProfileData() {
      const id = localStorage.getItem('ProfileView');
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${id}`;
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(response => {
          console.log(url);
          return response.json();
           
        })
        .then(data => {
          console.log(data);
          console.log(url);
          this.profileData = data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    async getWishlists() {
      const id = localStorage.getItem('ProfileView');
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${id}/wishlists`;
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
      const response = await fetch(url, { headers })
      if (response.ok) {
        const json_response = await response.json()
        console.log(json_response)
        if (json_response) {
          this.wishlists = json_response
          console.log(this.wishlists)
        } else {
          console.error('Error: Wishlists data is missing')
        }
      } else {
        console.error('Error calling API:', response.status)
      }
    },
    showDeleteConfirmation() {
      this.showConfirmationDialog  = true;
    },
    cancelDelete() {
      this.showConfirmationDialog  = false;
    },
    deleteUser() {
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/users`;
      fetch(url, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'accept': 'application/json'
        }
      })
        .then(response => {
          if (response.status === 204) {
            console.log('Usuario borrado');
            this.$router.push({ name: 'Login' });
          } else {
            console.log('Error al borrar el usuario');
          }
          this.showConfirmationDialog = false;
        })
        .catch(error => console.log(error));
    },
    sendFriendRequest() {
      const id = localStorage.getItem('ProfileView');
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
            this.friendRequestStatus = 'Solicitud enviada';
            this.showConfirmationDialog = true;
          } else if (response.status === 400) {
            this.friendRequestStatus = 'Solicitud errónea';
            this.showConfirmationDialog = true;
            console.log('Solicitud erronea');
          } else if (response.status === 401) {
            this.friendRequestStatus = 'Solicitud errónea';
            this.showConfirmationDialog = true;
            console.log('Fallo en el token');
          } else if (response.status === 409) {
            this.friendRequestStatus = 'El usuario ya es tu amigo';
            this.showConfirmationDialog = true;
          } else if (response.status === 410) {
            this.friendRequestStatus = 'El usuario ya no existe';
            this.showConfirmationDialog = true;
            console.log('El id de usuario no existe');
            this.showConfirmationDialog = true;
          } else {
            this.friendRequestStatus = 'Error al enviar solicitud, inténtalo más tarde';
            this.showConfirmationDialog = true;
            console.log('Error Api');
          }
        })
        .catch(error => console.log(error));
    },
  },
  
};
</script>

<template>
  <div>
    <h2>Perfil Amistad</h2>
    <div class="user-info">
      <img :src="profileData && profileData.image" alt="Foto de perfil" class="user-image" />
      <h3 class="user-name">{{ profileData && profileData.name }} {{ profileData && profileData.last_name }}</h3>
      <button @click="sendFriendRequest">Enviar solicitud de amistad</button>
      
    </div>
    <div class="wishlist">
      <h3>WishList</h3>
      <div class="wishlist-buttons">
        <button class="wishlistbtn" v-for="item in wishlists" :key="item.id">{{ item.name }}</button>
      </div>
    </div>
  </div>
  <b-modal v-model="showConfirmationDialog" title="Confirmación" ok-title="Aceptar">
      <p>{{ friendRequestStatus }}</p>
    </b-modal>
</template>


<style scoped>
main {
  position: relative;
  width: 100%;
  height: 100%;
}

.user-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.user-info button {
  background-color: #A33DA5;
  color: #fff;
  padding: 8px 16px;
  border-radius: 40px;
  cursor: pointer;
}

.user-image {
  display: flex;
  height: 40px;
  max-width: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.user-name {
  max-height: 50%;
}

.user-actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 50%;
}

.wishlist {
  display: flex;
  flex-direction: column;
}

.wishlistbtn {
  background-color: #A33DA5;
  color: #fff;
  padding: 8px 16px;
  border-radius: 40px;
  cursor: pointer;
}

.wishlist-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>