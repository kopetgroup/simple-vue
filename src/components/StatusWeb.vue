<template>
  <div class="hello">
    <header-component></header-component>

    <h1>{{ msg }}</h1>
    {{ $appName }}

    <div class="card-columns">
      {{ posts }}
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
  name: 'HelloWorld',
  data () {
    return {
      kiwots: [],
      msg: 'Status Domain: ' + this.$route.params.id,
      posts: []
    }
  },
  created () {
    document.title = 'API: ' + this.$route.params.id
    this.getData()
  },
  methods: {
    getData (page) {
      var url = 'https://www.reddit.com/r/girls.json'
      axios.get(url).then(response => {
        this.posts = response.data
        console.log(this.posts)
      }).catch(error => {
        console.log(error)
      })
      axios.get(this.$searchx + 'category=decor&q=decor').then(response => {
        this.kiwots = response.data
      }).catch(error => {
        console.log(error)
      })
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
  width:100%;
  float:left;
}
.sss img {
  float:left;
  margin:0 10px 10px 0;
}
.green {
  background:#2ecc71;
  border:solid 1px #2ecc71;
  color:#fff;
}
</style>
