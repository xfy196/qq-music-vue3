import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/base.scss";
import "@/assets/theme.scss";
import "@/assets/common.scss"
import App from "./App.vue";
import "@/utils/extend";
import router from "./router";
const app = createApp(App);
import "./permission";
app.use(createPinia());
app.use(router);

app.mount("#app");
