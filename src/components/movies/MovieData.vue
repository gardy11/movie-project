<template>
  <div>
    <div class="container flex pb-3 mx-auto mt-10 mb-2 rwd">
      <img :src="posterPath" class="w-64 max-lg:m-auto h-96" alt="" />
      <div class="flex-col items-center justify-between ml-24 max-lg:ml-5">
        <h1 class="text-4xl font-semibold max-lg:mt-5 max-lg:text-center">{{ movie.title }}</h1>

        <h1
          v-if="movie.original_title != movie.title"
          class="text-xl font-semibold text-purple-500 max-lg:text-center"
        >
          {{ movie.original_title }}
        </h1>
        <div class="mt-4 text-sm max-lg:ml-8">
          <div>
            <span class="mr-1 text-gray-400">上映日期: </span
            >{{ movie.release_date }}
          </div>
          <div class="mt-1">
            <span class="mr-1 text-gray-400">片長:</span
            >{{ convertToHoursMinutes(movie.runtime) }}
            <div class="mt-1">
              <span class="mr-1 text-gray-400">類型:</span>
              <span
                :key="index"
                v-for="(item, index) in movie.genres"
                class="ml-1"
                >{{ ToTraditional(item.name) }}
                <span v-if="movie.genres.length - 1 != index">、</span>
              </span>
            </div>
          </div>
          <div class="flex items-baseline mt-2">
            <svg
              class="w-5 mr-1 text-yellow-500 fill-current"
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
            <span class="text-2xl text-yellow-500">
              {{ voteAverageConverter }}
            </span>
            <div>
              <span class="mr-1 text-yellow-500"> /10 </span>
              ({{ movie.vote_count }}個評分)
            </div>
          </div>
        </div>
        <p class="mt-6 max-lg:mx-5">
          {{ movie.overview }}
        </p>

        <div class="mt-6 mb-3 ml-5 max-sm:ml-10">
          <a
            v-if="movie.videos"
            @click.prevent="openYouTubeModel"
            target="blank"
            class="inline-flex px-5 py-3 text-gray-900 bg-yellow-500 rounded cursor-pointer hover:text-white hover:shadow-lg hover:bg-blue-700"
          >
            <svg
              class="w-6 fill-current"
              fill="#000000"
              viewBox="0 0 56 56"
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
                  d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 23.8749 36.6250 L 36.4140 29.2188 C 37.3280 28.6563 37.3046 27.3672 36.4140 26.8516 L 23.8749 19.3984 C 22.9140 18.8359 21.6483 19.2812 21.6483 20.3359 L 21.6483 35.6875 C 21.6483 36.7656 22.8436 37.2344 23.8749 36.6250 Z"
                ></path>
              </g>
            </svg>
            <span class="ml-3">觀看預告</span>
          </a>

          <div
            v-show="!this.isCollect"
            class="inline-flex px-8 py-3 ml-8 text-black bg-yellow-500 rounded cursor-pointer max-sm:ml-20 hover:text-white hover:shadow-lg hover:bg-blue-700"
            @click.prevent="addToWatch"
          >
            <svg
              class="w-5 text-yellow-500 fill-current"
              viewBox="-0.5 0 25 25"
              fill="none"
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
                  d="M5.5 3.50027V21.5003C5.5 21.9603 6.08 22.1803 6.38 21.8203L11.62 15.6403C11.82 15.4003 12.18 15.4003 12.38 15.6403L17.62 21.8203C17.92 22.1703 18.5 21.9603 18.5 21.5003V3.50027C18.5 3.22027 18.28 3.00027 18 3.00027H6C5.72 3.00027 5.5 3.23027 5.5 3.50027Z"
                  stroke="#0d0c0c"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>

            <span class="ml-5">收藏</span>
          </div>

          <div
            v-show="this.isCollect"
            class="inline-flex py-3 ml-8 text-black bg-yellow-500 rounded cursor-pointer px-7 hover:text-white hover:shadow-lg hover:bg-blue-700"
            @click.prevent="addToWatch"
          >
            <svg
              class="w-5 text-red-600 fill-current"
              viewBox="-0.5 0 25 25"
              fill="none"
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
                  d="M5.5 3.50027V21.5003C5.5 21.9603 6.08 22.1803 6.38 21.8203L11.62 15.6403C11.82 15.4003 12.18 15.4003 12.38 15.6403L17.62 21.8203C17.92 22.1703 18.5 21.9603 18.5 21.5003V3.50027C18.5 3.22027 18.28 3.00027 18 3.00027H6C5.72 3.00027 5.5 3.23027 5.5 3.50027Z"
                  stroke="#0d0c0c"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <span class="ml-3">已收藏</span>
          </div>
        </div>
      </div>
    </div>

    <CastMember
      v-if="movie.credits.cast != false"
      :casts="movie.credits.cast"
    />
    <ImageData
      v-if="movie.images.backdrops != false"
      :images="movie.images.backdrops"
      v-on:on-image-click="showImageModel"
    />
    <MediaModel
      v-model="modelOpen"
      :mediaURL="mediaURL"
      :isVideo="this.isVideo"
    />
    <MovieCollection
      v-if="movie.belongs_to_collection != null"
      :collections="collections"
    />
  </div>
</template>

<script>
const STORAGE_KEY = "to-watch-movies";

import MovieCollection from "./MovieCollection.vue";
import { ToTraditional } from "../../services/ToTraditional";
import CastMember from "./CastMember.vue";
import ImageData from "./ImageData.vue";
import MediaModel from "../models/MediaModel.vue";
export default {
  components: {
    CastMember,
    ImageData,
    MediaModel,
    MovieCollection,
  },
  data() {
    return {
      movie: {
        credits: {
          crew: {},
        },
        images: {
          backdrops: {},
        },
        belongs_to_collection: {
          id: "",
        },
      },
      collections: [],
      modelOpen: false,
      isVideo: false,
      mediaURL: "",
      toWatchMovies: [],
      isCollect: false,
    };
  },

  watch: {
    "$route.params.id": {
      handler() {
        this.fetchMovie(this.$route.params.id);
      },
      immediate: true,
    },
    toWatchMovies: {
      handler: function () {
        this.saveStorage();
      },
      deep: true,
    },
    isCollect: { 
      handler: function () {
        this.ckeckToWatch();
      },
      immediate: true
    },
  },
  created() {
    this.toWatchMovies = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  },

  methods: {
    async fetchMovie(movieId) {
      try {
        const response = await this.$http.get(
          "/movie/" +
            movieId +
            "?append_to_response=credits,belongs_to_collection,videos,images&language=zh-TW&include_image_language=en,null&include_video_language=en,null"
        );
        this.movie = response.data;

        if (this.movie.belongs_to_collection != null) {
          await this.fetchCollections(this.movie.belongs_to_collection.id);
        }
      } catch (error) {
        console.error(error);
      }

      if (this.toWatchMovies.length > 0) {
        for (let i = 0; i < this.toWatchMovies.length; i++) {
          if (Number(movieId) === this.toWatchMovies[i].id) {
            this.isCollect = true;
          }
        }
      }
    },

    async fetchCollections(collectionId) {
      if (collectionId) {
        const response = await this.$http.get(
          `/collection/${collectionId}?language=zh-TW`
        );
        this.collections = response.data.parts.filter(
          (collection) => collection.id !== this.movie.id
        );
      } else {
        this.collections = null;
      }
    },

    openYouTubeModel() {
      this.mediaURL = this.youtubeVideo();
      this.isVideo = true;
      this.modelOpen = true;
    },
    openImageModel() {
      this.isVideo = false;
      this.modelOpen = true;
    },
    youtubeVideo() {
      if (!this.movie.videos) {
        return;
      } else {
        return (
          "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
        );
      }
    },
    showImageModel(imageFullPath) {
      this.mediaURL = imageFullPath;
      this.isVideo = false;
      this.modelOpen = true;
    },
    convertToHoursMinutes(time) {
      var hours = Math.floor(time / 60);
      var minutes = time % 60;

      if (hours === 0) {
        return minutes + "分鐘";
      } else if (minutes === 0) {
        return hours + "小時";
      } else {
        return hours + "小時" + minutes + "分鐘";
      }
    },

    ToTraditional,

    addToWatch() {
      const listMovie = {
        id: this.movie.id,
        title: this.movie.title,
        original_title: this.movie.original_title,
        poster_path: this.movie.poster_path,
        release_date: this.movie.release_date,
      };
      for (let i = 0; i < this.toWatchMovies.length; i++) {
        if (this.toWatchMovies[i].id === this.movie.id) {
          this.deleteToWatch(this.movie);
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

    ckeckToWatch() {     
      return this.isCollect;
    },
  
  },


  computed: {
    posterPath() {
      if (!this.movie.poster_path) {
        return "https://placehold.jp/30/9c9c9c/ffffff/500x740.png?text=暫無圖片";
      }
      return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
    },
    voteAverageConverter() {
      let average = (Math.round(this.movie.vote_average * 10) / 10).toString();
      if (average.indexOf(".") < 0) {
        average += ".0";
        return average;
      } else {
        return average;
      }
    },
  },
};
</script>

<style>
</style>