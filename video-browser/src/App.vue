<template>
  <div class="container">
    <Searchbar @changeSearchTerm="onNewSearch"/>
    <div class="row">
      <div class="col-8 border">
        <VideoDetail :video="selectedVideo"/>
      </div>
      <div class="col-4">
        <VideoList v-bind:videos="videoList"
          @videoSelected="onVideoSelect"
        />
      </div>

      
    </div>
  </div>
</template>

<script>
const API_KEY = 'AIzaSyDaHS6aqBn7VF8jcEWN_m6uP9aDZllp_jw'
import Searchbar from './components/Searchbar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Searchbar,
    VideoList,
    VideoDetail
  }
  ,
  data () {
    return {
      videoList: [],
      selectedVideo: null
    }
  },
  methods:{
    onVideoSelect(video){
      this.selectedVideo = video
    },
    onNewSearch(term){
      // console.log('app '+term)
      
      axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: term
        }
      })
      .then(response => {
        const { items } = response.data
        this.videoList = items
      })
      
    }
  }
}
</script>

<style lang="scss">

</style>
