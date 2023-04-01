<template>
  <header>
    <nav>
      <div class="nav-left">
        <img src="@/assets/imagenes/logo.png" alt="Logo de la empresa">
        <ul>
          <li><a href="#">Aniversario</a></li>
          <li><a href="#">Cumpleaños</a></li>
          <li><a href="#">Otros</a></li>
        </ul>
      </div>
      <div class="nav-right">
        <button><i class="fa fa-bell"></i></button>
        <button>Log Out</button>
      </div>
    </nav>
  </header>
</template>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
  }
  
  nav {
    display: flex;
    align-items: center;
  }
  
  .nav-left {
    display: flex;
    align-items: center;
  }
  
  img {
width: 74px;
height: 57px;

background: url(logo.png);

flex: none;
order: 0;
flex-grow: 0;
  }
  
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: flex;
flex-direction: row;
align-items: center;
padding: 4px 8px;
gap: 4px;
width: 102px;
height: 28px;
flex: none;
order: 2;
flex-grow: 0;
  }
  
  .nav-right {
    display: flex;
    align-items: center;
  }
  
  .login-buttons button {
    margin-left: 20px;
  }
  
  .fa-bell {
    font-size: 20px;
  }
  
</style>