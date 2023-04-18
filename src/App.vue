<template>
  <div id="app">
    <div class="flex justify-between border-b border-gray-500">
      <NavBar />
      <SearchBar />
    </div>

    <HomeWorld />
    <!-- <router-view />  可以顯示components裡的  HomeWorld.vue的內容 -->
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "./components/header/NavBar.vue";
import SearchBar from "./components/header/SearchBar.vue";
import FooterBar from "./components/footer/FooterBar.vue";
import HomeWorld from "./components/front/HomeWorld.vue";


export default {
  name: 'App',
  components: {
    NavBar,
    SearchBar,
    FooterBar,
    HomeWorld
  }
  
}
</script>

<style>
</style>
