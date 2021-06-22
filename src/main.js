import { createApp } from 'vue';
import axios from 'axios';
import 'bootstrap/dist/js/bootstrap';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
