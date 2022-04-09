<template>
    <div v-if="video">
        <div class="ratio ratio-16x9">
            <iframe :src="videoUrl" />
        </div>
        <div class="details">
            <h4 v-html="videoTitle" />
            <p v-html="videoDescription" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['video'],
    computed: {
        videoDescription(){
            const { description } = this.video.snippet
            return description
        },
        videoTitle(){
            const { title } = this.video.snippet
            return title
        },
        videoUrl(){
            const { videoId} = this.video.id
            return `https://www.youtube.com/embed/${videoId}`
        }

    }
}
</script>

<style scoped>
    .details{
        margin-top: 10px;
        padding: 10px;
        border: 1px sold #ddd;
        border-radius: 4px;
    }
</style>>

