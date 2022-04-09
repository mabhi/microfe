<template>
    <ul class="list-group">
        <VideoListItem v-for="video in videos"
            :key="video.etag" 
            :currentVideo="video"
            @videoSelected="onVideoSelectedInChildItem"
        />
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem.vue'
export default {
    name: "video-list",
    components: {
        VideoListItem
    },
    props: ['videos'],
    methods: {
        onVideoSelectedInChildItem(video){
            this.$emit('videoSelected', video)            
        }
    }
}
</script>

<style scoped>

</style>