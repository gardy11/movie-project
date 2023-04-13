<template>
    <div class="container mx-auto mt-2 border-t border-gray-600 mb-14">
        <h2 class="mt-3 text-4xl font-semibold">
            劇照
        </h2>

        <div class="grid grid-cols-1 gap-2 mt-2 mb-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
           <div class="mx-auto mt-2" :key="index" v-for="(image, index) in images">
            <img 
                @click="openModel(image)"
                :src="movieImage(image)"
                class="duration-150 cursor-pointer hover:opacity-75 tansition easy-in-out"
                alt=""
            />
           </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            required: true,
        },
    },

    methods: {
        movieImage(image) {
            if(image.file_path){
                return "https://image.tmdb.org/t/p/w300" + image.file_path;
            }else{
                return "https://via.placeholder.com/300x450"
            }
        },
        openModel(image) {
            let imageFullPath = ""
            if(image.file_path){
                imageFullPath = "https://image.tmdb.org/t/p/original/" + image.file_path
            }else {
                imageFullPath = "https://via.placeholder.com/300x450";
            }
            this.$emit("on-image-click", imageFullPath);
        }
    },
};
</script>

<style>

</style>