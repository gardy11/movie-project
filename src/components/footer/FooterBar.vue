<template>
  <div>
    <svg
      @click.prevent="GoTop"
      class="ml-auto mr-2 cursor-pointer fill-current text-amber-800 -mb-7 hover:text-yellow-300"
      width="85px"
      height="85px"
      viewBox="0 0 16.00 16.00"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      stroke="transparent"
      stroke-width="0"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="0.128"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <rect width="16" height="16" id="icon-bound" fill="none"></rect>
        <polygon points="8,3 16,11 0,11"></polygon>
      </g>
      <text x="5.3" y="9.5"  fill="black" class="svgtext "  font-size="smaller">Top</text>
    </svg>

    <footer class="relative z-40 px-6 py-6 bg-blue-500">
      <div >
        <div class="flex items-center justify-center">
          <span
            class="mr-3 text-xl font-black whitespace-nowrap text-powerbycolor"
            >Powered by
          </span>

          <a
            href="https://www.themoviedb.org/"           
          >
            <img
              src="@/assets/images/TMDB.svg"
              class="h-5 "
              alt="TMDB Logo"
            />
          </a>
        </div>

        <!-- <ul
        class="flex flex-wrap items-center mb-6 text-sm text-red-500 sm:mb-0 dark:text-gray-400"
      >
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>-->
      </div>

      <!--<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> 
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 3
      <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All
      Rights Reserved.
    </span> -->
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    GoTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.svgtext {
  font: 4px sans-serif;
}
</style>