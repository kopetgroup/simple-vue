<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: 'LogOut',
  data () {
    return {
    }
  },
  created () {
    this.metu()
  },
  methods: {
    metu (page) {
      console.log('logging out')
      localStorage.removeItem('login')
      // this.$router.replace({ name: 'LoginPage' })
      location.href = ''
    }
  }
}

</script>

<style scoped>
</style>
