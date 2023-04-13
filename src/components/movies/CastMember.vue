<template>
    <div class="container mx-auto border-t border-gray-600">
        <h2 class="mt-2 text-4xl font-semibold">
            演員
        </h2>

        <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
           <div class="mx-auto" :key="index" v-for="(cast, index) in casts">
                <router-link :to="`/actor/${cast.id}`">
                    <img 
                        :src="castProfileImage(cast)"
                        class="duration-150 hover:opacity-75 tansition easy-in-out"
                        alt=""
                    />
                    <span class="text-gray-300">{{ cast.name }}</span>
                </router-link>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        casts: {
            required: true,
        },
    },
    methods: {
        castProfileImage(cast) {
            if(cast.profile_path){
                return "https://image.tmdb.org/t/p/w300" + cast.profile_path;
            }else{
                // return "https://via.placeholder.com/300x450?text=No+image+available"
                return "https://placehold.jp/30/9c9c9c/ffffff/300x450.png?text=暫無演員圖片";
            }
        },
    },
};
</script>

<style>

</style>