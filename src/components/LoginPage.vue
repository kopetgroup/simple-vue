<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <div>
      <form>
        <fieldset>
          <label>Username</label>
          <input v-model="username" type="text" class="form-control">
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input v-model="password" type="password" class="form-control">
        </fieldset>
        <button @click="login()" type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: '',
      msg: 'Login Sek '
    }
  },
  created () {
    document.title = 'API: ' + this.$route.params.id
  },
  methods: {
    login () {
      console.log('aku login:', this.username)
      localStorage.setItem('login', true)
      localStorage.setItem('username', this.username)
      localStorage.setItem('password', this.password)
      this.$router.replace({ name: 'Home' })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
