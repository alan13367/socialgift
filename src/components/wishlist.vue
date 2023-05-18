<template>
    <div>
      <myWishLists @wishlistSelected="handleWishlistSelected" />
      <myWishListView :selectedWishlistId="selectedWishlistId" />
    </div>
  </template>


<script>
import myWishLists from './views/myWishLists.vue';
import myWishListView from './views/myWishListView.vue';

export default {
  components: {
    myWishLists,
    myWishListView
  },
  data() {
    return {
      selectedWishlistId: null
    };
  },
  methods: {
    handleWishlistSelected(id) {
      this.selectedWishlistId = id;
      console.error('lista', this.selectedWishlistId);
    }
  }
};
</script>







