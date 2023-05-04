<script>






</script>


<template>
  <header>
    <nav>
      <div class="menu">
        <div class="imglogo">
        <RouterLink to="/">
          <img src="logo.png" alt="Logo de la empresa" />
        </RouterLink>
      </div>
        <div class="menu-links">
          <RouterLink to="/mywishlists" class="menu-link">
            Mis Listas
          </RouterLink>
          <RouterLink to="/ManageFriends" class="menu-link">
            Amigos
          </RouterLink>
          <RouterLink to="/WishListFriends" class="menu-link">
            Listas Amigos
          </RouterLink>
          <RouterLink to="/Chats" class="menu-link">
            Chats
          </RouterLink>
          <RouterLink to="/FriendsPending" class="menu-link">
            Solicitudes amigos
          </RouterLink>
          <RouterLink to="/UserProfile" class="menu-link">
            Perfil
          </RouterLink>
        </div>
      </div>
      <div class="actions">
        <button>
          <img src="@/assets/Imagenes/alertsicon.png" alt="Boton Alertas" 
          />
        </button>
        <button>
          <img src="@/assets/Imagenes/logoff.png" alt="Cerrar Sesion"
           />
        </button>
      </div>
      <div class="divbuttons" >
        <router-link to="/login">
          <button class="authbutton">Log In</button>
        </router-link>
        <router-link to="/signup">
          <button class="authbutton">Sign Up</button>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>

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
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  imglogo {
    display: flex;
    height: 50px;
    padding-right: 50px;
    position: relative;
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
    align-items: center;
    padding-left: 10px;
    width: 80%;
  }

  .menu-link {
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
  }

  .actions{
    display: flex;
    flex-direction: row;
  }
  .actions button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    width: 50%;
    height: 40;
  }

  .actions button img {
    height: 25px;
  }



.authbutton {
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
  flex-grow: 1; /* Crece si hay espacio disponible */
}

</style>
