<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/wishListFriends">wishListFriends</RouterLink>
        <RouterLink to="/wishListFriendsEdit">wishListFriendsEdit</RouterLink>
        <RouterLink to="/ManageFriends">ManageFriends</RouterLink>
        <RouterLink to="/FriendsPending">FriendsPending</RouterLink>
        <RouterLink to="/UserProfile">UserProfile</RouterLink>
      </nav>
    </div>
  </header>
  
  <RouterView />
</template>

<style scoped>
</style>
