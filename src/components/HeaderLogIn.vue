<template>
  <header>
    <nav>
      <div class="menu">
        <RouterLink to="/">
          <img src="logo.png" alt="Logo de la empresa" />
        </RouterLink>
        <div class="menu-links">
          <RouterLink to="/" class="menu-link">
            Aniversarios
          </RouterLink>
          <RouterLink to="/" class="menu-link">
            Cumpleaños
          </RouterLink>
          <RouterLink to="/" class="menu-link">
            Otros
          </RouterLink>
        </div>
      </div>
      <div class="actions">
        <button>
          Sign Up
        </button>
        <button>
          Log In
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background-color: #ffffff
  }
img {
    height: 50px;
    padding-right: 1%;
  }

  .menu {
    display: flex;
    align-items: center;
    height: 80%;
    width: 80%;
  }

  .menu-links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
  }

  menu-link {
    font-family: 'Inter';
    font-style: semibold;
    font-weight: 100;
    font-size: 18;
    color: #000000;
    text-decoration: none;
    padding-bottom: 1%;
    border-bottom: 2px solid transparent;
  }

actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 10px;
  flex-wrap: wrap;
  max-height: 80%;
}

button {
  font-family: 'Inter';
  font-weight: 100;
  font-size: 10px;
  text-decoration: none;
  padding: 0.5em 1em;
  border: none;
  margin: 0 0.5em;
  background: #7C3AED;
  color: white;
  width: auto; /* Ajustamos el ancho del botón */
  max-width: 100%;
  flex-grow: 1; /* Crece si hay espacio disponible */
}


</style>
