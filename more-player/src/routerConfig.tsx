// 路由配置
import React from "react";
import HeaderIndex from "./layout/Header";
import BodyIndex from "./layout/Body";
import FooterIndex from "./layout/Footer";
import { routerRedux } from "dva/router";

//routerRedux: 里面包含了所有connected-react-router的东西

const Index = (api?: any) => {
  const { history } = api;

  return (
    <div>
      {/* 路由信息，存放在history中 */}
      <routerRedux.ConnectedRouter history={history}>
        <div>
          <HeaderIndex></HeaderIndex>
          <BodyIndex></BodyIndex>
          <FooterIndex></FooterIndex>
        </div>
      </routerRedux.ConnectedRouter>
    </div>
  );
};
export default Index;
