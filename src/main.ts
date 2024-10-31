import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

VueMarkdownEditor.use(vuepressTheme);

const pinia = createPinia();
const app = createApp(App).use(VueMarkdownEditor);
app.use(router);
app.use(pinia);

app.mount("#app");
