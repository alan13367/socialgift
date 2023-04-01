<template>
  <header>
    <nav>
      <div class="nav-left">
        <img src="logo.png" alt="Logo de la empresa">
        <ul>
          <li><a href="#">ManageFriends</a></li>
          <li><a href="#">UserProfile</a></li>
          <li><a href="#">WishListFriendsEdit</a></li>
          <li><a href="#">WishListFriends</a></li>
          <li><a href="#">FriendsPending</a></li>
        </ul>
      </div>
      <div class="nav-right">
        <button><i class="alerts"></i></button>
        <button>Log Out</button>
      </div>
    </nav>
  </header>
</template>

<style>
header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 97px;
  left: 0px;
  top: 0px; 
  border-bottom: 5px solid #000000;
  
  background-color: #ffffff;
  z-index: 1;
}

.left-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start; 
  padding: 0px;
  gap: 2%;
  height: 57px;
  flex-basis: 70%;
  background: #FFFFFF;
}


.right-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 2%;
  height: 32px;
  flex-basis: 30%;
}

img {
  width: 15%;
  height: 100%;
  background: url(logo.png);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
}

li {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 2%;
}

a {
  width: 100%;
  height: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: 'liga' off;
  color: #111827;
}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 45%;
  height: 32px;
  /* Primary/600 */
  background: #7C3AED;
  border-radius: 8px;
}
</style>