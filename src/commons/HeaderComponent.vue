<template>
  <div>

    <img :src="posts" width="160"><br/>

    <router-link :to="'/'">Home</router-link>
    <router-link :to="'/status/xxx'">Status</router-link>
    <router-link :to="'/logout'">Logout</router-link>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
  data () {
    return {
      posts: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      var url = 'https://www.reddit.com/r/sistar.json'
      axios.get(url).then(response => {
        this.posts = response.data.data.children[0].data.thumbnail
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

</script>
