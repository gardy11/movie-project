<template>
  <div class="mx-5">
    <h2 class="mt-5 text-xl font-semibold text-yellow-500">
        近期受歡迎
    </h2>

    <div class="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
      <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" :genres="genres" />
    </div>
  </div> 
</template>

<script>
import MovieItem from "../items/MovieItem";

export default {
    components: {
        MovieItem,
    },

    data: function(){
      return {
        movies: [],
        genres: [],
      };
    },
   
    async mounted() {
      this.fetchGenres();
      try {
        const response = await this.$http.get("/movie/popular?language=zh-TW&region=TW");
        this.movies = response.data.results;
        // console.log(response.data.results[2].title);
      }catch(error){
        console.log(error);
      }
    },

    methods: {
    async fetchGenres() {
      try {
        const response = await this.$http.get("/genre/movie/list?language=zh-TW");
        this.genres = response.data.genres;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>

</style>