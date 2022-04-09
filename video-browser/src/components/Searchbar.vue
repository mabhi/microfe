<template>
    <div>
        <input @input="debounceSearchTermChange"/>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'searchbar',
    data(){
        return {
            
        }
    },
    methods:{
        debounceSearchTermChange: _.debounce(function(evt){
            // console.log('Debounce text change ' + evt.target.value)
            this.$emit('changeSearchTerm', evt.target.value)            
            }, 500),
    }
}
</script>

<style scoped>
    input {
        width: 75%;
    }

    div{
        text-align: center;
        margin: 20px;
    }
</style>