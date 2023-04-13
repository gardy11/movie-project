<template>
  <div class="container mx-auto mt-3 mb-16 border-t border-gray-600">
    <h2 class="mt-3 text-4xl font-semibold">相關系列</h2>

    <div class="grid gap-8 mt-3 sm:grid-cols-2 lg:grid-cols-5">
      <div :key="collection.id" v-for="collection in this.collections">
        <router-link
          :to="`/movie/${collection.id}`"
          class="text-sm leading-normal text-gray-400 hover:text-white"
        >
          <img
            :src="movieImage(collection)"
            class="mt-1 transition duration-150 ease-in-out hover:opacity-75"
          />

          {{ collection.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collections: {
      required: true,
    },
  },

  methods: {
    movieImage(collection) {
      const posterPath = collection.poster_path;
      if (!posterPath) {
        // return "https://via.placeholder.com/185x278?text=%E6%9A%AB%E7%84%A1%E5%9C%96%E7%89%87";
        return "https://placehold.jp/30/9c9c9c/ffffff/185x278.png?text=暫無圖片";
      }
      return "https://image.tmdb.org/t/p/w185/" + posterPath;
    },
  },
};
</script>

<style>
</style>