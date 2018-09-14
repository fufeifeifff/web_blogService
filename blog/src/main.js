// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import '@/assets/icon/iconfont.css'
import '@/assets/fonts/fonts.css'
import '@/assets/css/main.css'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
import 'echarts'
import 'echarts-gl'
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueMoment from 'vue-moment'
import 'iview/dist/styles/iview.css'
import router from './router'
import store from './store'
import App from './App'
// import ContentHeader from 'components/ContentHeader'
import SuccessDialog from './components/SuccessDialog'
import ErrDialog from './components/ErrDialog'
import VueVideoPlayer from 'vue-video-player'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import iView from 'iview'
import RegionPicker from 'vue-region-picker'
import REGION_DATA from 'china-area-data'
import VueQuillEditor from 'vue-quill-editor'
import infiniteScroll from 'vue-infinite-scroll'

// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
// import '@/permission'

Vue.use(iView)
Vue.use(ElementUI)
Vue.use(VueMoment)
Vue.use(VueVideoPlayer)
Vue.use(VueQuillEditor)
Vue.use(infiniteScroll)
// Vue.component('content-header', ContentHeader)
Vue.component('success-dialog', SuccessDialog)
Vue.component('err-dialog', ErrDialog)
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(RegionPicker, {
  region: REGION_DATA
})
Vue.component(RegionPicker)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
