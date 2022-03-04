// 播放器主体
// 路由内容显示
import React from "react";
import { Route, Switch } from "dva/router";
import HomePage from "../../Components/HomePage";
// import "../../assets/less/bodyIndex.less"


const bodyIndex = function () {
  return (
    <div>
      <Switch>
        {/* 切换的路由显示view */}
        <Route path="/" exact={true} component={HomePage} />
      </Switch>
    </div>
  );
};
export default bodyIndex;
