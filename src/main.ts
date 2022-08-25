import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { globalCookiesConfig } from "vue3-cookies";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

globalCookiesConfig({
    expireTimes: "30d",
});

createApp(App)
    .use(router)
    .use(createPinia())
    .use(autoAnimatePlugin)
    .mount("#app");
