<template>
  <div>
    <div class="z-50 shadow">
      <router-link :to="`/actor/${this.actor.id}`">
        <img :src="profileImage" alt="" />

        <h3 class="mt-2 text-lg text-center text-mycolor">{{ actor.name }}</h3>

        <p v-html="knownFor" class="ml-2 text-gray-400"></p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    actor: {
      required: true,
    },
  },
  computed: {
    profileImage() {
      if (!this.actor.profile_path) {
        // return "https://via.placeholder.com/235x235";
        return "https://placehold.jp/30/9c9c9c/ffffff/235x235.png?text=暫無圖片";
      }
      return (
        "https://image.tmdb.org/t/p/w235_and_h235_face/" +
        this.actor.profile_path
      );
    },
    knownFor() {
      let knownStr = "";
      for (let i = 0; i < this.actor.known_for.length; i++) {
        knownStr +=
          (this.actor.known_for[i].title  ||
          this.actor.known_for[i].name) + "<br>";
      }
      return knownStr;
    },

    
  },
};
</script>

<style>
</style>