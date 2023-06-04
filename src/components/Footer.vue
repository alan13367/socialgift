<template>
  <div >
    <footer class="footer-container">
      <div class="logo">
        <img src="logo.png" alt="Logo de la empresa">
      </div>
      <nav class="enlaces">
        <ul>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Ayuda</a></li>
          <li><a href="#">Contacto</a></li>
          <li>&copy; 2023 SocialGift. Todos los derechos reservados</li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
  .footer-container {
    bottom: 0;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    color: #FFFFFF;
    padding: 32px 112px;
    
  }

  footer{
    background-color: #7E57C2;
    grid-area: footer;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 74px;
    height: 57px;
    margin-right: 32px;
  }

  .enlaces {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .enlaces ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    height: 32px;
  }

  .enlaces li {
    margin-left: 32px;
  }

  .enlaces a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 14px;
  }

  .enlaces li:last-child {
    margin-left: auto;
  }

</style>
