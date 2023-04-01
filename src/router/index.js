import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import WishListFriends from '../views/WishListFriendsView.vue'
import WishListFriendsEdit from '../views/WishListFriendsEditView.vue'
import ManageFriends from '../views/ManageFriendsView.vue'
import FriendsPending from '../views/FriendsPendingView.vue'
import UserProfile from '../views/UserProfileView.vue'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/WishListFriendsEdit',
      name: 'WishListFriendsEdit',
      component: WishListFriendsEdit

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
      path: '/UserProfile',
      name: 'UserProfile',
      component: UserProfile
    }
    
  ]
})

export default router
