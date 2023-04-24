<template>
  <div class="container mx-auto px-9">
    <h4 class="mt-10 text-xl font-semibold text-yellow-500">收藏清單</h4>
    <h4
      v-if="this.toWatchMovies == false"
      class="mt-24 mb-56 text-2xl font-semibold text-center text-gray-500 align-middle"
    >
      尚無收藏電影
    </h4>
    <div
      class="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 movie-poster"
    >
      <div :key="movie.id" v-for="movie in this.toWatchMovies">
        <router-link
          :to="`/movie/${movie.id}`"
          class="relative text-sm font-semibold leading-normal text-gray-400 hover:text-white"
        >
            <img
              :src="movieImage(movie)"
              class="mt-1 transition duration-150 ease-in-out hover:opacity-75"
            />

            <div
              class="text-white button-size"
              @click.stop.prevent="addToWatch(movie)"
            >
            &check;
            </div>

          <h1 class="mt-1">{{ movie.title }}</h1>
          <h1
            v-if="movie.original_title != movie.title"
            class="text-purple-500"
          >
            {{ movie.original_title }}
          </h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const STORAGE_KEY = "to-watch-movies";

export default {
  data() {
    return {
      toWatchMovies: [],
      isCollect: false,
    };
  },
  created() {
    this.toWatchMovies = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    console.log(this.toWatchMovies);
  },

  watch: {
    toWatchMovies: {
      handler: function () {
        this.saveStorage();
      },
      deep: true,
    },
  },

  methods: {
    movieImage(movie) {
      const posterPath = movie.poster_path;
      if (!posterPath) {
        // return "https://via.placeholder.com/185x278?text=%E6%9A%AB%E7%84%A1%E5%9C%96%E7%89%87";
        return "https://placehold.jp/30/9c9c9c/ffffff/185x278.png?text=暫無圖片";
      }
      return "https://image.tmdb.org/t/p/w185/" + posterPath;
    },

    addToWatch(movie) {
      const listMovie = {
        id: movie.id,
        title: movie.title,
        original_title: movie.original_title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
      };
      for (let i = 0; i < this.toWatchMovies.length; i++) {
        if (this.toWatchMovies[i].id === movie.id) {
          this.deleteToWatch(movie);
          return;
        }
      }
      this.toWatchMovies.push(listMovie);
      this.saveStorage();
      this.isCollect = true;
    },

    saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.toWatchMovies));
    },

    deleteToWatch(movie) {
      this.toWatchMovies = this.toWatchMovies.filter(
        (toWatchMovie) => toWatchMovie.id !== movie.id
      );
      this.isCollect = false;
    },
  },
};
</script>

<style>
</style>