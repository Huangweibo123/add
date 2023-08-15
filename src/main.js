import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.use(ElementUI);
// 导入全局样式表
import "@/assets/css/global.css";
import TreeTable from "vue-table-with-tree-grid";
// 导入NProgress这个包对应的js和css
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// 导入axios
import axios from "axios";
axios.defaults.baseURL = "http://www.chenfuguo.cn:8899/api/private/v1";
// 在request拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use((config) => {
  NProgress.start();
  config.headers.Authorization = window.sessionStorage.getItem("token");
  // 在最后必须return confign
  return config;
});
// 在response中隐藏进度条NProgress.done()
axios.interceptors.response.use((config) => {
  NProgress.done();
  return config;
});
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.component("tree-table", TreeTable);
// 导入时间过滤器
Vue.filter("dateFormate", function (originVal) {
  const dt = new Date(originVal);
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + "").padStart(2, "0");
  const d = (dt.getDate() + "-").padStart(2, "0");
  const hh = (dt.getHours() + "").padStart(2, "0");
  const mm = (dt.getMinutes() + "").padStart(2, "0");
  const ss = (dt.getSeconds() + "").padStart(2, "0");
  return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`;
});
// 导入富文本编辑器
import VueQuillEditor from "vue-quill-editor";
// require style 导入富文本编辑器对应的样式
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// 将富文本编辑器，注册为全局可用的组件
Vue.use(VueQuillEditor);
// 导入eachts
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
