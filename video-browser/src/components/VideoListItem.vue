<template>
    <li class="list-group-item" @click="onVideoSelect">
        <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
                    <img :src="thumbnailURL">
                
            </div>
            <div class="flex-grow-1 ms-3" v-html="videoTitle">
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name:"video-item",
    props: ['currentVideo'],
    data(){
        return {

        }
    },
    computed:{
        videoTitle(){
            const {title} = this.currentVideo.snippet
            return title
        },

        thumbnailURL(){
            const {url} = this.currentVideo.snippet.thumbnails.default
            return url

        }
    },
    methods:{
        onVideoSelect(){
            this.$emit('videoSelected', this.currentVideo)
        }
    }
    
}
</script>

<style scoped>

</style>