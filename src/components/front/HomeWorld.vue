<template>
    <div class="container mx-auto mb-16">    
      <PopularMovies />
      <NowPlayingMovies />
      <UpcomingMovies />
      <TopRatedMovies />
  </div>
</template>

<script>
import PopularMovies from "./PopularMovies.vue";
import UpcomingMovies from "./UpcomingMovies.vue";
import TopRatedMovies from "./TopRatedMovies.vue";
import NowPlayingMovies from "./NowPlayingMovies.vue";



export default {
  components: {
    PopularMovies,
    UpcomingMovies,
    TopRatedMovies,
    NowPlayingMovies,
  },
};
</script>

<style>

</style>