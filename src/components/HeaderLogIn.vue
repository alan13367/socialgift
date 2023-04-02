<template>
  <header>
    <nav>
      <div class="menu">
        <div class="logo">
        <RouterLink to="/">
          <img src="@/assets/imagenes/logo.png" alt="Logo" />
        </RouterLink>
        </div>
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
        <button class="btn-signup">
          Sign Up
        </button>
        <button class="btn-login">
          Log In
        </button>
      </div>
    </nav>
  </header>
</template>
<style>

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 2%;
  }

  logo {
    height: 50px;
    padding-right: 100px;
  }

  menu {
    display: flex;
    height: 70%;
    width: 70%;
  }

  menu-links {
    display: flex;
    justify-content: flex-start;
    padding-left: 10;
    width: 50%;
    margin-left: 5;
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
    margin: 0 1%;
  }

  menu-link:hover,
  menu-link:focus {
    border-bottom: 2px solid #000000;
  }

  actions {
    display: flex;
    align-items: center;
    margin-left: 10;
  }

  btn-signup,
  btn-login {
    background-color: #006699;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    padding: 12p 24p;
    border: none;
    border-radius: 4;
    margin-left: 12;
  }

  btn-signup:hover,
  btn-login:hover {
    cursor: pointer;
    opacity: 0.8;
  }

</style>