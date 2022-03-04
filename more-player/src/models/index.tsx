// dva仓库模型
import { Model } from "dva";

const apis: Model = {
  namespace: "apiStatus",
  state: {
    path: ['apis'],
  },
  reducers: {
    changePath(state, { payload }) {
      return { ...state, path: payload };
    },
  },
};

export default apis;
