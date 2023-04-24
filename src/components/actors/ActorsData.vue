<template>
  <div class="container px-4 pt-16 mx-auto mb-16">
    <h2 class="text-xl font-semibold text-yellow-500">熱門演員</h2>

    <div
      class="grid grid-cols-2 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <ActorsItem
        class="mx-auto"
        :key="actor.id"
        v-for="actor in this.actors"
        :actor="actor"
      />
    </div>

    <div class="flex justify-center mt-16 mb-0">
        <a 
            @click.prevent="previous()"
            class="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white hover:border-transparent"
        >
            上一頁
        </a>
        <a 
            @click.prevent="next()" 
            class="px-4 py-2 ml-10 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white hover:border-transparent"
        >
            下一頁
        </a>
    </div>

  </div>
</template>

<script>
let currentPage = 1;

import ActorsItem from "../items/ActorsItem.vue";
export default {
  data() {
    return {
      actors: [],
    };
  },
  components: {
    ActorsItem,
  },

  mounted() {
    this.fetchActors(currentPage);
  },

  methods: {
    async fetchActors(page) {
      try {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/person/popular?language=zh-TW&page=" + page
        );
        this.actors = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },

    async previous(){
        currentPage -= 1;
        await this.fetchActors(currentPage);
        window.scrollTo(0, 0);
    },

    async next(){
        currentPage += 1;
        await this.fetchActors(currentPage);
        window.scrollTo(0, 0);
    },

  },
};
</script>

<style>
</style>