<template>
  <div class="hello">

    <header-component></header-component>

    <h1>{{ msg }}</h1>
    cek /r/:
    <input
      v-model="findit"
      @keyup.enter="requestData(findit)">

    <p style="white-space: pre-line;">{{ findit }}</p>

    <button
      :class="{'green':(findit !== '')}"
      :disabled="findit == ''"
      @click="requestData(findit)">{{ btn }}</button>

    <div class="card">

      <div
        v-for="post in posts"
        v-if="post.data.thumbnail!=='self'"
        :key="post.id"
        class="sss">

        <img
          :src="post.data.thumbnail">
        <br/>
        <a
          :href="post.data.url"
          target="_blank">
          {{ post.data.title }}
        </a>

      </div>

    </div>

  </div>
</template>

<script>
import HeaderComponent from '../commons/HeaderComponent'
import axios from 'axios'
export default {
  components: {
    HeaderComponent
  },
  mixins: 'sempak',
  name: 'HelloWorld',
  beforeCreate () {
  },
  data () {
    return {
      btn: 'search',
      msg: 'Welcome to Your Vue.js App',
      posts: [],
      findit: '',
      kukis: this.$cookies.get('kopet'),
      postsLoading: false,
      nextPage: null
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to.name, from.name)
      this.getPosts()
      // react to route changes...
    },
    findit: function (newQuestion, oldQuestion) {
      this.btn = 'Waiting...'
      this.$cookies.set('kopet', newQuestion)
    }
  },
  created () {
    document.title = this.$route.params.id
    this.getPosts()
    this.$cookies.set('kopet', 'yes kopet')
  },
  // updated: function () {
  //  this.$nextTick(function () {
  //    console.log('sempak34')
  //  })
  // },
  methods: {
    getPosts () {
      this.postsLoading = true
      var url = 'https://www.reddit.com/r/PrettyGirls.json?limit=30'
      // if (page != null) {
      //  url = 'https://www.reddit.com/r/all/top.json?limit=10&count=10&after=' + page
      axios.get(url).then(response => {
        // this.posts = this.posts.concat(response.data.data.children)
        this.posts = response.data.data.children
        this.nextPage = response.data.data.after
        this.postsLoading = false
      }).catch(error => {
        console.log(error)
      })
    },
    requestData (q) {
      var url = 'https://www.reddit.com/r/' + q + '.json?limit=30'
      this.postsLoading = true
      axios.get(url).then(response => {
        // this.posts = []
        // this.posts = this.posts.concat(response.data.data.children)
        this.posts = response.data.data.children
        this.nextPage = response.data.data.after
        this.postsLoading = false
        this.btn = 'search'
        document.title = q
        history.pushState(null, null, '#/' + q)
        this.kukis = q
      }).catch(error => {
        console.log(error)
      })
    },
    warn: (message, event) => {
      if (event) event.preventDefault()
      console.log(message)
    },
    submit: (message) => {
      console.log('sumbit', message)
      console.log('sumbit', this.a)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.sss {
  text-align:left;
  color:#333;
  height:250px;
  overflow: hidden;
  width:200px;
  float:left;
}
.sss img {
  float:left;
  width:90%;
  margin:0 10px 10px 0;
}
.green {
  background:#2ecc71;
  border:solid 1px #2ecc71;
  color:#fff;
}
.card {
  float:left;
  width:100%;
}
</style>
