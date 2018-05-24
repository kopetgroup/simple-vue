// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.use(require('vue-cookies'))

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.prototype.$appName = 'My App kopet'
Vue.prototype.$searchx = 'https://openwhisk.ng.bluemix.net/api/v1/web/ayuwaterford_dev/default/getkiwot-1.json?'

Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
