<template>
  <div class="app-container">
    <friend-list></friend-list>
    <chat-container></chat-container>
  </div>
</template>

<script>
import FriendList from '../components/FriendList.vue';
import ChatContainer from '../components/ChatContainer.vue';

export default {
  components: {
    FriendList,
    ChatContainer,
  },
};
</script>

<style>
.app-container {
  display: flex;
  height: 100vh;
  width: 100%;
}


</style>