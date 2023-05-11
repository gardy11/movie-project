<template>
  <div class="flex mx-5 mt-5">
    <input
      ref="searchBox"
      type="search"
      class="relative mb-3 ml-2 mr-3 bg-transparent outline-none appearance-none hover:border-b hover:border-b-blue-400 focus:border-b focus:border-blue-400 w-60 px-7"
      placeholder="請輸入電影或演員名稱.."
      @input="debounceSearch"
      v-model="searchTerm"
      @focus="handleFocus"
    />

    <div class="absolute">
      <svg
        @click="debounceSearch"
        class="w-4 mt-3 ml-2 fill-current searchbar-icon"
        fill="#ffffff"
        viewBox="0 0 16 16"
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
            d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z"
          ></path>
        </g>
      </svg>
    </div>

    <div class="absolute z-50 mt-10 bg-gray-600 rounded w-60">
      <ul class="mt-1" v-if="showSearchResult">
        <li v-for="(movie, index) in searchResult" :key="index">
          <!-- 電影 -->
          <router-link
             :to="`/movie/${movie.id}`"
             @click.native="showSearchResult = false"
             class="flex items-center p-1 border-b border-gray-500"
             v-if="movie.overview"
          >
          <!-- <a
            v-if="movie.overview"
            :href="$router.resolve(`/movie/${movie.id}`).href"
            @click="showSearchResult = false"
            class="flex items-center p-1 border-b border-gray-500"
          > -->
            <img :src="posterPath(movie.poster_path)" alt="" class="w-10" />
            <div class="flex flex-col">
              <span v-if="movie.title" class="ml-3">{{ movie.title }}</span>
              <span
                v-if="
                  movie.original_title != movie.title && movie.original_title
                "
                class="ml-3 text-sm"
                >{{ movie.original_title }}</span
              >
            </div>
          <!-- </a> -->
          </router-link>

          <!-- 演員 -->
          <router-link
            v-if="movie.gender"
            :to="`/actor/${movie.id}`"
            @click.native="showSearchResult = false"
            class="flex items-center p-1 border-b border-gray-500"
          >
          <!-- <a
            v-if="movie.gender"
            :href="$router.resolve(`/actor/${movie.id}`).href"
            @click="showSearchResult = false"
            class="flex items-center p-1 border-b border-gray-500"
          > -->
            <img :src="posterPath(movie.profile_path)" alt="" class="w-10" />
            <div class="flex flex-col">
              <span v-if="movie.name" class="ml-3">{{ movie.name }}</span>
            </div>
          <!-- </a> -->
          </router-link>
        </li>
      </ul>

      <ul class="px-3" v-if="searchResult.length == 0 && showSearchResult">
        <li>查無"{{ searchTerm }}"</li>
      </ul>
    </div>

    <!-- <AccountDropDown /> -->
  </div>
</template>

<script>
// import AccountDropDown from "./AccountDropDown.vue";
export default {
  components: {
    // AccountDropDown,
  },
  data() {
    return {
      searchResult: [],
      searchTerm: "",
      showSearchResult: false,
    };
  },
  mounted() {
    this.keyboardEvents();
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (event.target.value.length > 0) {
          this.fetchSearch(event.target.value);
        } else {
          this.showSearchResult = false;
        }
      }, 600);
    },

    async fetchSearch(term) {
      try {
        const response = await this.$http.get(
          "/search/multi?language=zh-TW&region=TW&query=" + term
        );
        this.searchResult = response.data.results.filter(
          (x) => x.media_type !== "tv"
        );
        this.showSearchResult = response.data.results.filter(
          (x) => x.media_type !== "tv"
        )
          ? true
          : false;
      } catch (error) {
        console.log(error);
      }
    },

    handleFocus() {
      if (this.searchTerm != "") {
        this.showSearchResult = true;
      }
    },

    keyboardEvents() {
      let windowObj = this;

      window.addEventListener("click", (e) => {
        if (!this.$el.contains(e.target)) {
          this.showSearchResult = false;
        }
      });

      window.addEventListener("keypress", (e) => {
        if (e.key == "/") {
          e.preventDefault();
          windowObj.$refs.searchBox.focus();
        }
      });

      // window.addEventListener("keydown", (e) =>{
      //   if(e.key == "Escape") {
      //     this.showSearchResult = false;
      //   }
      // });
    },

    posterPath(poster_path) {
      if (poster_path) {
        return "https://image.tmdb.org/t/p/w500" + poster_path;
      } else {
        return "https://placehold.jp/30/9c9c9c/ffffff/300x450.png?text=暫無圖片";
        // return "https://via.placeholder.com/50x75";
      }
    },
  },
};
</script>

<style>
</style>