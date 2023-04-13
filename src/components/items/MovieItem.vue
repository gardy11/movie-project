<template>
  <div class="duration-150 ease-in-out hover:shadow-2xl hover:scale-105 ">
    <router-link :to="`/movie/${movie.id}`">
      <img
        :src="posterPath"
        class="duration-150 hover:opacity-75 tansition easy-in-out"
      />
    <h3 class="ml-1">{{ movie.title }}</h3>
      <h5
        class="ml-1 text-purple-400"
        v-if="movie.original_title != movie.title"
      >
        {{ movie.original_title }}
      </h5>
      <div class="flex ml-1">
        <svg
          class="w-4 text-yellow-500 fill-current"
          fill="#ffffff"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
            ></path>
          </g>
        </svg>
        <span class="ml-2">
          {{ movie.vote_average }} / 10 分 |  {{ movie.release_date }}
        </span>
      </div>
  
      <!-- <span class="ml-1 text-sm text-gray-500">
        <span :key="genre" v-for="(genre, index) in movie.genre_ids">
          {{ genreTypeName(genre, index) }}
        </span>
      </span> -->
    </router-link>
  </div>
</template>

<script>
// import { ToTraditional } from "../../services/ToTraditional";
export default {
  props: {
    movie: {
      required: true,
    },
    // genres: {
    //   required: true,
    // },
  },

  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
    },
  },

  // methods: {
  //   genreTypeName(genraId, index) {
  //     for (const item of this.genres) {
  //       if (item.id == genraId) {
  //         if (this.movie.genre_ids.length - 1 == index) {
  //           return ToTraditional(item.name);
  //         } else {
  //           return ToTraditional(item.name) + "、";
  //         }
  //       }
  //     }
  //   },
  // },
};
</script>

<style>
</style>