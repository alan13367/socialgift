<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import AuthButtons from './components/AuthButtons.vue';

</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/FriendsPending">FriendsPending</RouterLink>
        <RouterLink to="/ManageFriends">ManageFriends</RouterLink>
        <RouterLink to="/UserProfile">UserProfile</RouterLink>
        <RouterLink to="/WishListFriendsEdit">WishListFriendsEdit</RouterLink>
        <RouterLink to="/WishListFriends">WishListFriends</RouterLink>
      </nav>
    </div>
  </header>
  
  <RouterView />
</template>

<style scoped>
</style>
