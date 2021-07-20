import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDmsdB8AwiZqYU-mnLe8TR6wSjkMUwpYb0",
  authDomain: "basket-c3d32.firebaseapp.com",
  databaseURL: "https://basket-c3d32-default-rtdb.firebaseio.com",
  projectId: "basket-c3d32",
  storageBucket: "basket-c3d32.appspot.com",
  messagingSenderId: "315935141018",
  appId: "1:315935141018:web:40aedfbe55c227fe070323",
  measurementId: "G-V0BB6PZQ08"
};

firebase .initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
