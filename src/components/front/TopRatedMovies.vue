<template>
    <div id="example">
      <h2 class="mt-20 text-xl font-semibold text-yellow-500">最高評分</h2>
      <carousel-3d
        :controls-visible="true"
        :clickable="false"
        :key="topratedMovies.length"
        :listData="topratedMovies"
        :height="500"
        :autoplay="true"
        :autoplay-timeout="3000"
      >
        <slide :index="i" :key="i" v-for="(movie, i) in topratedMovies">
          <figure>
            <router-link :to="`/movie/${movie.id}`">
              <img
                :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
              />
              <figcaption>
                {{ movie.title }}
              </figcaption>
            </router-link>
          </figure>
        </slide>
      </carousel-3d>
    </div>
  </template>
  
  <script>
  import { Carousel3d, Slide } from "vue-carousel-3d";
  export default {
    data() {
      return {
        topratedMovies: [],
      };
    },
    components: {
      Carousel3d,
      Slide,
    },
    mounted() {
      this.fetchUpcomingMovies();
    },
  
    methods: {
      async fetchUpcomingMovies() {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/movie/top_rated?language=zh-TW&region=TW"
        );
  
        this.topratedMovies = response.data.results;
      },
    },
  };
  </script>
  
  <style>
  .carousel-3d-container figure {
    margin: 0;
  }
  
  .carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 20px;
    font-weight: bolder;
    min-width: 100%;
    box-sizing: border-box;
  }
  
  .next span,
  .prev span {
    color: white;
  }
  </style> 