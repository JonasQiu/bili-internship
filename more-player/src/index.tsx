import "./index.css";
// import apiStatus  from "./models/index";
import dva from "dva";
import RouterConfig from "./routerConfig";
import { createBrowserHistory } from "history";

//得到一个dva对象
const app = dva({
  //redux
  history: createBrowserHistory(), //创建历史路由
  // initialState: {
  //初始状态
  // apiStatus: {
  //   path: ['apis'],
  // },
  // },
  // extraEnhancers: [
  //   function (createStore) {
  //     return function (...args) {
  //       console.log("创建仓库");
  //       return createStore(...args);
  //     };
  //   },
  // ],
});

//在启动之前定义模型
// app.model(apiStatus);

//设置根路由，即启动后，要运行的函数，函数的返回结果会被渲染
app.router(RouterConfig);

app.start("#root");
