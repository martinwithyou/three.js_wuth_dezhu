import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(iView);
new Vue( {
    el: '#app',
    store,
    router,
    render: h => h( App )
} )
