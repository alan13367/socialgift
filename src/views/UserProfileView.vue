<script>
export default {
  data() {
    return {
      id: localStorage.getItem("id"),
      profileData: null,
      wishlists: [],
      chunkedWishlists: [],
      showConfirmationDialog: false,
    };
  },
  mounted() {
    this.fetchProfileData();
    this.getWishlists();
  },
  methods: {
    fetchProfileData() {
      const id = localStorage.getItem("idfriend");
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${this.id}`;
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(response => {
          console.error(response);
          return response.json();
        })
        .then(data => {
          this.profileData = data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    async getWishlists() {
      const id = localStorage.getItem('id');
      const url = ` https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${id}/wishlists`;
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
          this.chunkedWishlists = this.chunkWishlists(this.wishlists, 3)
          console.error(this.wishlists)
        } else {
          console.error('Error: Wishlists data is missing')
          console.error(response)
        }
      } else {
        console.error('Error calling API:', response.status)
      }
    },

    chunkWishlists(wishlists, size) {
      const rows = []
      let index = 0
      while (index < wishlists.length) {
        rows.push(wishlists.slice(index, index + size))
        index += size
      }
      return rows
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
          } else {
            console.log('Error al borrar el usuario');
          }
          this.showConfirmationDialog = false;
        })
        .catch(error => console.log(error));
    },
  },
};
</script>

<template>
  <div>
    <div class="modal" v-if="showConfirmationDialog">
      <div class="modal-content">
        <p>¿Está seguro que desea eliminar este usuario?</p>
        <div class="modal-actions">
          <button class="modal-button yes" @click="deleteUser">Sí</button>
          <button class="modal-button no" @click="cancelDelete">No</button>
        </div>
      </div>
    </div>
    <h2>Perfil</h2>
    <div class="user-info">
      <img :src="profileData && profileData.image" alt="Foto de perfil" class="user-image" />
      <h3 class="user-name">{{ profileData && profileData.name }} {{ profileData && profileData.last_name }}</h3>
      <button v-if="id !== profileData?.id" @click="sendFriendRequest">Enviar solicitud de amistad</button>
      <button v-if="id == profileData?.id" @click="showDeleteConfirmation">Borrar usuario</button>
    </div>
    <div class="wishlist">
      <h4>WishList</h4>
      <div class="wishlist-buttons">
        <button class="wishlistbtn" v-for="item in wishlists" :key="item.id">{{ item.name }}</button>
      </div>
    </div>

  </div>
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


