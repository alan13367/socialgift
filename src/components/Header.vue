<template>
  <nav>
    <div class="sidebar" :class="{ 'sidebar-open': sidebarOpen }" @click="toggleSidebar">
      <div class="menu-links" v-if="loggedIn && mediaQueryTriggered">
        <router-link to="/mywishlists" class="menu-link">
          Mis Listas
        </router-link>
        <router-link to="/ManageFriends" class="menu-link">
          Amigos
        </router-link>
        <router-link to="/WishListFriends" class="menu-link">
          Listas de regalos compartidas
        </router-link>
        <router-link to="/Chats" class="menu-link">
          Chats
        </router-link>
        <router-link to="/FriendsPending" class="menu-link">
          Solicitudes amigos
        </router-link>
        <router-link to="/UserProfile" class="menu-link" @click="getprofile">
          Perfil
        </router-link>
      </div>
    </div>
    <div class="menu">
      <button class="burgerbutton" v-if="loggedIn && mediaQueryTriggered" @click="toggleSidebar">
        <img src="@/assets/Imagenes/burger_icon.png" alt="Burger Menu" class="burgerimg">
      </button>
      <div class="imglogo">
        <router-link to="/">
          <img src="logo.png" alt="Logo de la empresa" class="logo-image" />
        </router-link>
      </div>
      <div class="menu-links" v-if="loggedIn && !mediaQueryTriggered">
        <router-link to="/mywishlists" class="menu-link">
          Mis Listas
        </router-link>
        <router-link to="/ManageFriends" class="menu-link">
          Amigos
        </router-link>
        <router-link to="/WishListFriends" class="menu-link">
          Listas de regalos compartidas
        </router-link>
        <router-link to="/Chats" class="menu-link">
          Chats
        </router-link>
        <router-link to="/FriendsPending" class="menu-link">
          Solicitudes amigos
        </router-link>
        <router-link to="/UserProfile" class="menu-link" @click="getprofile">
          Perfil
        </router-link>
      </div>
    </div>
    <div class="actions" v-if="loggedIn">
      <button @click="logout">
        <img src="@/assets/Imagenes/logoff.png" alt="Cerrar Sesion" />
      </button>
    </div>
    <div class="divbuttons" v-else>
      <router-link to="/login">
        <button class="authbutton">Log In</button>
      </router-link>
      <router-link to="/signup">
        <button class="authbutton">Sign Up</button>
      </router-link>
    </div>
  </nav>
</template>

<script>
import emmiter from '@/plugins/emmiter';
export default {
  
  data() {
    return {
      loggedIn: false,
      mediaQueryTriggered: false,
      sidebarOpen: false
      };
  },
  created() {
    emmiter.on('loggedIn', (value) => {
      this.loggedIn = value;
    });

    window.addEventListener('resize', this.checkMediaQuery);
    this.checkMediaQuery();
  },
  destroyed() {
    window.removeEventListener('resize', this.checkMediaQuery);
  },
  mounted() {
    if (localStorage.loggedIn !== undefined) {
      this.loggedIn = !!localStorage.loggedIn;
      this.loggedIn = localStorage.loggedIn === 'true';
    }
  },
  
  methods: {
    logout() {
      localStorage.setItem("loggedIn", false);
      this.loggedIn = false;
      this.$router.push('/');
      
    },
    getprofile(){
      this.idFriend = localStorage.getItem('id');
      emmiter.emit('ProfileView', this.idFriend);
    },
    checkMediaQuery() {
      if (window.matchMedia('(max-width: 767px)').matches) {
        this.mediaQueryTriggered = true;
      } else {
        this.mediaQueryTriggered = false;
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
};
</script>



<style scoped>
.burgerbutton{
  display: flex;
  height: auto;
  background: transparent;
}
.burgerimg{
  max-height: 20px;
}
.divbuttons{
  display: flex;
  flex-direction: row;
  padding: 2px;
}

  header {
    border-bottom: 2px solid #000000;
    background-color: #ffffff;
    width: 100%;
    z-index: 1;
    overflow-x: hidden;
    height: 10%;
    display: flex;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid black;
    background-color: white;
  }

  .imglogo {
  display: flex;
  padding-right: 50px;
  position: relative;
}


.logo-image {
  height: 100%;
  max-height: 70px;
  border-radius: 25%;
  display: flex;
}

  .menu {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .menu-links {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    width: 70%;
  }

  .menu-link {
    display: flex;
    font-family: 'Inter';
    font-style: semibold;
    font-weight: 100;
    font-size: 18px;
    color: #000000;
    text-decoration: none;
    padding-bottom: 1%;
    border-bottom: 2px solid transparent;
  }

  .menu-link:hover,
  .menu-link:focus {
    border-bottom: 2px solid #A33DA5;
    color: #A33DA5;
    display: flex;
  }

  .actions{
    padding-right: 10px;
    display: flex;
  }
  .actions button {
    display: flex;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    width: 50%;
    height: 40;
  }

  .actions button img {
    display: flex;
    height: 25px;
  }



.authbutton {
  display: flex;
  font-family: 'Inter';
  font-weight: 100;
  font-size: 15px;
  text-decoration: none;
  padding: 0.5em 1em;
  border: none;
  background: #A33DA5;
  color: white;
  width: 80px ; 
  height: 40px;
  flex-grow: 1; 
}

@media (max-width: 767px) {
  .burgerbutton{
    width: 30%;
  }
  .menu {
    width: 30%;
  }

  .actions{
    width: 20%;
  }
  .sidebar {
  padding-top: 70px;
  position: fixed;
  top: 70px;
  left: -100%;
  width: 50%;
  height: 100%;
  background-color: #f2f2f2;
  transition: left 0.3s ease-out;
}

.sidebar-open {
  left: 0;
}

.menu-links {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .menu-link {
    display: flex;
    font-family: 'Inter';
    font-style: semibold;
    font-weight: 100;
    font-size: 18px;
    color: #000000;
    text-decoration: none;
    padding-bottom: 1%;
    padding-bottom: 20px;
    border-bottom: 2px solid transparent;
  }

}
</style>