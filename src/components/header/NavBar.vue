<template>
  <div class="flex mt-3 ml-3">
    <router-link to="/">
      <img
        src="@/assets/images/clapperboard.png"
        alt=""
        class="object-cover hover:text-yellow-300"
      />
    </router-link>

    <ul class="flex -mt-3">
      <li>
        <router-link
          to="/"
          class="inline-block px-4 py-6 ml-5 hover:bg-opacity-25 hover:text-yellow-300 hover:bg-blue-400"
        >
          電影
        </router-link>
      </li>
      <li>
        <router-link
          to="/actors"
          class="inline-block px-4 py-6 ml-3 hover:text-yellow-300 hover:bg-blue-400 hover:bg-opacity-25"
        >
          演員
        </router-link>
      </li>
      <li>
        <router-link
          to="/collect"
          class="inline-block px-4 py-6 ml-3 hover:text-yellow-300 hover:bg-blue-400 hover:bg-opacity-25"
          v-if="this.$store.getters.isUserLoggedIn"
        >
          收藏
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>