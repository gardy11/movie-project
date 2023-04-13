<template>
  <div
    style="background-color: rgba(0, 0, 0, 0.5)"
    class="fixed top-0 left-0 z-50 flex items-center w-full h-full overflow-y-auto shadow-lg"
    tabindex="0"
    v-show="value"
  >
    <div class="container mx-auto overflow-y-auto rounded-lg lg:px-32">
      <div class="bg-gray-900 rounded">
        <div class="flex justify-end pt-2 pr-4">
          <button
            @click="close"
            class="text-3xl leading-none hover:text-gray-300"
          >
            &times;
          </button>
        </div>

        <!-- <div class="flex">
          <button
            @click="close"
            class="text-3xl leading-none hover:text-gray-300"
          >
            &lt;
          </button> -->

          <div class="px-8 py-8 modal-body">
            <div
              class="relative overflow-hidden responsive-container"
              :style="isVideo ? { 'padding-top': '56.25%' } : {}"
            >
              <img :src="mediaURL" v-if="!isVideo" />
              <iframe
                class="absolute top-0 left-0 w-full h-full responsive-iframe youtube-video"
                style="border: 0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                v-if="isVideo"
                :src="mediaURL"
              ></iframe>

              <!-- <button
                @click="close"
                class="text-3xl leading-none hover:text-gray-300"
              >
                &gt;
              </button>
            </div> -->

            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    value: {
      required: true,
    },
    mediaURL: {
      required: true,
    },
    isVideo: {
      required: true,
    },
  },
  methods: {
    close() {
    //   const aa = document.getElementsByClassName('youtube-video')[0]
    //   await aa.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    //   console.log(aa)
      
     this.$emit("input", !this.value);

    },
  },
};
</script>
  
  <style></style>
  