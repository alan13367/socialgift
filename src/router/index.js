import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import WishListFriends from '../views/WishListFriendsView.vue'
import ManageFriends from '../views/ManageFriendsView.vue'
import FriendsPending from '../views/FriendsPendingView.vue'
import UserProfile from '../views/UserProfileView.vue'
import SignUpView from '../views/SignUpView.vue'
import ChatsView from '../views/ChatsView.vue'
import MyWishlists from '../views/MyWishLists.vue'
import WishlistView from '../views/WishlistView.vue'
import MyWishlistView from '../views/MyWishlistView.vue'
import FriendsProfileView from '../views/FriendsProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mywishlists',
      name: 'mywishlists',
      component: MyWishlists
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView
    },
    {
      path: '/mywishlist',
      name: 'mywishlist',
      component: MyWishlistView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView

    },
    {
      path: '/wishlistfriends',
      name: 'Wishlistfriends',
      component: WishListFriends

    },
    {
      path: '/ManageFriends',
      name: 'ManageFriends',
      component: ManageFriends

    },
    {
      path: '/FriendsPending',
      name: 'FriendsPending',
      component: FriendsPending

    },
    {
      path: '/FriendsProfile',
      name: 'FriendsProfile',
      component: FriendsProfileView
    },
    {
      path: '/Chats',
      name:'Chats',
      component: ChatsView
    },
    {
      path: '/UserProfile',
      name: 'UserProfile',
      component: UserProfile
    }
  ]
})

export default router
