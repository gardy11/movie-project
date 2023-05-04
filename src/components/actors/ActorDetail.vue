<template>
  <div>
    <div class="container flex pt-16 mx-auto actor-page max-sm:pt-12">
      <div class="flex-none">
        <img :src="castProfileImage()" alt="" class="max-sm:m-auto" />
      </div>

      <div class="ml-10">
        <ul class="md:mt-40 md:flex-col md:space-y-10 max-sm:flex socail-icon max-sm:ml-32 max-sm:space-x-10">
          <li v-if="socialDetails.facebook_id">
            <a              
              :href="'https://facebook.com/' + socialDetails.facebook_id"
              title="Facebook"
              target="_blank"
            >
              <svg
                class="w-6 text-gray-400 fill-current hover:text-white"
                viewBox="0 0 448 512"
              >
                <path
                  d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                />
              </svg>
            </a>
          </li>

          <li v-if="socialDetails.instagram_id">
            <a              
              :href="'https://instagram.com/' + socialDetails.instagram_id"
              title="Instagram"
              target="_blank"
            >
              <svg
                class="w-6 text-gray-400 fill-current hover:text-white"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </li>

          <li v-if="socialDetails.twitter_id">
            <a             
              :href="'https://twitter.com/' + socialDetails.twitter_id"
              title="Twitter"
              target="_blank"
            >
              <svg
                class="w-6 text-gray-400 fill-current hover:text-white"
                viewBox="0 0 512 512"
              >
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div class="ml-16 max-lg:mx-5 max-lg:mt-5">
        <h2 class="text-4xl font-semibold max-lg:text-center">
          {{ this.actor.name }}
        </h2>

        <div class="mt-4" v-if="this.actor.birthday != null">
          <span
            v-if="this.actor.deathday == null"
            class="ml-2 text-sm text-gray-400"
            >出生: {{ this.actor.birthday }} ({{
              getAge(this.actor.birthday) + "歲"
            }}) 
          </span>

          <span v-if="this.actor.deathday == null" class="ml-2 text-sm text-gray-400">出生地: {{ this.actor.place_of_birth }}</span>

          <div v-if="this.actor.deathday != null">
            <span class="ml-2 text-sm text-gray-400">
              出生: {{ this.actor.birthday }}
            </span>
            <span v-if="this.actor.deathday != null" class="ml-2 text-sm text-gray-400">{{ this.actor.place_of_birth }}</span>

            <p class="ml-2 text-sm text-gray-400">
              逝世: {{ this.actor.deathday }} ({{
                getAge(this.actor.birthday, this.actor.deathday) + "歲"
              }})
            </p>
          </div>
        </div>
        <p v-if="this.actor.biography != ''" class="mt-8 text-gray-300">
          {{ this.actor.biography }}
        </p>

        <p v-else class="mt-8 text-gray-300">
          {{ this.actorEn.biography }}
        </p>
      </div>
    </div>

    <div class="container mx-auto mb-12 px-9" v-if="this.castMovies!=false">
      <h4 class="mt-10 text-xl font-semibold text-yellow-500 ">電影作品</h4>
      <div
        class="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6"
      >
        <div :key="movie.id" v-for="movie in this.castMovies">
          <router-link
            :to="`/movie/${movie.id}`"
            class="text-sm leading-normal text-gray-400 hover:text-white"
          >
            <img
              :src="movieImage(movie)"
              class="mt-1 transition duration-150 ease-in-out hover:opacity-75"
            />

            {{ movie.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialDetails: [],
      actor: {},
      knownFor: [],
      castMovies: {},
      castTvs: {},
      actorEn: {},
    };
  },

  mounted() {
    this.fetchActor(this.$route.params.id);
    this.fetchActorEn(this.$route.params.id);
    this.fetchCredits(this.$route.params.id);
    this.fetchSocial(this.$route.params.id);
  },
  methods: {
    async fetchActor(actorId) {
      const response = await this.$http.get(
        "https://api.themoviedb.org/3/person/" + actorId + "?language=zh-TW"
      );
      this.actor = response.data;
    },

    async fetchActorEn(actorId) {
      const response = await this.$http.get(
        "https://api.themoviedb.org/3/person/" + actorId
      );
      this.actorEn = response.data;
    },

    async fetchCredits(actorId) {
      const response = await this.$http.get(
        "https://api.themoviedb.org/3/person/" +
          actorId +
          "/combined_credits?language=zh-TW"
      );

      this.castMovies = response.data.cast.filter(
        (x) => x.media_type == "movie"
      )
      if(this.castMovies == false){
        this.castMovies = response.data.cast.filter(
        (x) => x.media_type == "tv"
      )
      }
    },

    movieImage(movie) {
      const posterPath = movie.poster_path;
      if (!posterPath) {
        // return "https://via.placeholder.com/185x278?text=%E6%9A%AB%E7%84%A1%E5%9C%96%E7%89%87";
        return "https://placehold.jp/30/9c9c9c/ffffff/185x278.png?text=暫無圖片";
      }
      return "https://image.tmdb.org/t/p/w185/" + posterPath;
    },

    async fetchSocial(actorId) {
      const response = await this.$http.get(
        "https://api.themoviedb.org/3/person/" + actorId + "/external_ids"
      );
      this.socialDetails = response.data;
    },

    castProfileImage() {
      if (this.actor.profile_path) {
        return "https://image.tmdb.org/t/p/w300" + this.actor.profile_path;
      } else {
        // return "https://via.placeholder.com/300x450?text=No+image+available"
        return "https://placehold.jp/30/9c9c9c/ffffff/300x450.png?text=暫無演員圖片";
      }
    },

    getAge(birthday, deathday) {
      if (deathday) {
        const ageDifMs =
          new Date(deathday).getTime() - new Date(birthday).getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      } else {
        const ageDifMs = Date.now() - new Date(birthday).getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }
    },
  },
};
</script>

<style></style>
