<script>
import emmiter from '@/plugins/emmiter';
export default {
  data() {
    return {
      email: '',
      password: '',
      loggedIn: false,
    };
  },
  methods: {
    async submitForm(event) {
      event.preventDefault();
      const response = await fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/login', 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      });
      if (response.status === 200) {
        response.json().then(data => {
          let token = data.accessToken.replace(/["']/g, "");
          localStorage.setItem('token',token);
          const getId = fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/search?s=${this.email}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + data.accessToken
            },
          }).then(response => response.json()).then(data => {
            localStorage.setItem('id', JSON.stringify(data[0].id));
          });
          localStorage.setItem('loggedIn', true);
          emmiter.emit('loggedIn', true);

          this.$router.push('/mywishlists');
          
        });
      } else if (response.status === 400) {
        console.error('Error  API');
      } else if (response.status === 401) {
        console.error('Mail o password incorrecto');
      }
    },
  },
  mounted() {
    this.loggedIn = localStorage.getItem('loggedIn') === 'true';
  },
};
</script>




<template>
  <div class="login-container">
    <div class="imageneslogin">
      <img src="@/assets/Imagenes/facebooklogin.png" alt="">
      <img src="@/assets/Imagenes/googlelogin.png" alt="">
      <h2>Or</h2>
    </div>
    <form class="login-form" @submit="submitForm">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit" class="submit-btn">LogIn</button>
    </form>
    <a href="#" class="forgot-password">Forgot your password?</a>
  </div>
</template>
  

  
<style scoped>
.imageneslogin {
  display: flex;
  padding-bottom: 5ch;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
}

.imageneslogin img {
  margin-bottom: 10px;
  padding: 10px;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  max-width: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}

.login-form h2 {
  margin-bottom: 20px;
}

.login-form label {
  font-weight: bold;
  margin-bottom: 10px;
}

.login-form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
}

.submit-btn {
  background-color: #A33DA5;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.forgot-password {
  display: block;
  font-weight: bold;
  text-decoration: underline;
  margin-top: 1em;
  cursor: pointer;
  color: black;
}

@media screen and (min-width: 768px) {
  .login-form {
    max-width: 500px;
  }
}
</style>
  