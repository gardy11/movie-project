<template>
  <div class="relative">
    <button @click="isOpen=!isOpen" class="focus:outline-none">
      <img
        src="@/assets/images/avatar.jpg"
        alt=""
        class="w-8 h-8 mb-2 rounded-full"
      />
    </button>

    <button
        @click="isOpen=false"
        v-if="isOpen"
        class="fixed top-0 bottom-0 right-0 w-full h-full bg-black opacity-50"
    >
    </button>

    <div 
        v-if="isOpen"
        class="absolute right-0 z-50 w-40 py-2 -mt-2 bg-white rounded-lg shadow-xl"
    >
        <a 
            href="" 
            class="block px-4 py-2 text-gray-500 hover:bg-indigo-400 hover:text-white">帳戶設定</a>
        <a 
            href="" 
            class="block px-4 py-2 text-gray-500 hover:bg-indigo-400 hover:text-white">支援</a>
        <a 
            @click.prevent="logout"
            href="" 
            class="block px-4 py-2 text-gray-500 hover:bg-indigo-400 hover:text-white">登出</a>
    </div>

  </div>
</template>

<script>
export default {
    created(){
        const handleEscape = (e) => {
            if (e.key == "Esc" || e.key == "Escape"){
                this.isOpen = false;
            }
        };
        document.addEventListener("keydown", handleEscape);

        this.$once("hook:beforeDestroy", () => {
            document.removeEventListener("keydown", handleEscape);
        });
    },
    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        logout(){
            this.$store.dispatch("setUserLoggedIn", false);
        },
    },
};
</script>

<style>
</style>