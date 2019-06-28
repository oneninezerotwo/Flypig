//引入请求后台的接口并调用
import { getData } from "../services/serviceForAxios";

export default {
  namespace: "store",

  state: { homeData: [], getTripInfo: [] },
  reducers: {
    catchHomeData(state, action) {
      return { ...state, homeData: action.result.data };
    },
    getTripInfo(state, action) {
      console.log(action.tripList);
      return { ...state, getTripInfo: action.tripList };
    }
  },
  effects: {
    *getHomeData({ payload }, { call, put }) {
      // eslint-disable-line
      //触发后台的接口请求
      let data = yield call(getData, payload);
      //触发reducers
      yield put({ type: "catchHomeData", result: data.data });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  }
};
