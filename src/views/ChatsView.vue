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

.friend-list {
  width: 200px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
}

.chat-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  height: 60px;
  font-size: 24px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.message {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row-reverse;
}

.message-bubble {
  max-width: 70%;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
}

.outgoing .message-bubble {
  background-color: #A33DA5;
  margin-left: auto;
}

.incoming .message-bubble {
  background-color: #E94AEC;
  margin-right: auto;
}

.chat-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}

.chat-input button {
  background-color: #A33DA5;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
</style>