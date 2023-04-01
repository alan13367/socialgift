<template>
  <header>
    <nav>
      <div class="menu">
        <RouterLink to="/">
          <img src="logo.png" alt="Logo de la empresa" />
        </RouterLink>
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
          <RouterLink to="/WishListFriendsEdit" class="menu-link">
            Regalar
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
    </nav>
  </header>
</template>

<style>
  header {
    border-bottom: 5px solid #000000;
    background-color: #ffffff;
    width: 100%;
    z-index: 1;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 2%;
  }

  img {
    height: 50px;
    padding-right: 100px;
  }

  .menu {
    display: flex;
    align-items: center;
    height: 80%;
    width: 80%;
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
    border-bottom: 2px solid #000000;
  }

  .actions button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    width: 48%;
    height: 40;
    
  }

  .actions button img {
    height: 25px;
  }
</style>
