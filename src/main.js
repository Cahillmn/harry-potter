import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

library.add(faBolt);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).use(router).mount('#app')

