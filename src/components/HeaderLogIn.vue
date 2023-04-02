<template>
  <header>
    <nav>
      <div class="menu">
        <RouterLink to="/">
          <img src="logo.png" alt="Logo de la empresa" />
        </RouterLink>
        <div class="menu-links">
          <RouterLink to="/" class="menu-link">
            Aniversario
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
          
        </button>
        <button>
          
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
    align-items: center;
    width: 100%;
    padding: 0 2%;
  }

  img {
    height: 50px;
  }

  .menu {
    display: flex;
    height: 80%;
    width: 80%;
  }

  .menu-links {
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
    width: 80%;
    margin-left: 5px;
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
    margin: 0 1%;
  }

  .menu-link:hover,
  .menu-link:focus {
    border-bottom: 2px solid #000000;
  }

</style>
