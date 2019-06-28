import {
  getData
} from "../services/serviceForAxios";
export default {
  namespace: "detail",

  state: {
    detail: '',
    pop_ok: false,
    promotion_ok: false,
    mark_ok: false,
  },
  reducers: {
    catDetailData(state, action) {
      return {
        ...state,
        detail: action.result.data
      };
    },
    getSessionStorage(state, action) {
      return {
        ...state,
        detail: action.data
      }
    },
    mark(state, action) {
      return {
        ...state,
        pop_ok: action.isok,
        promotion_ok: action.isok2,
        mark_ok: action.isok || action.isok2 ? true : false
      };
    },
  },
  subscriptions: {
    setup({
      dispatch,
      history
    }) {
      // eslint-disable-line
    }
  },

  effects: {
    * getDetailData({
      payload
    }, {
      call,
      put
    }) {
      // eslint-disable-line
      let data = yield call(getData, payload);
      yield put({
        type: "catDetailData",
        result: data.data
      });
    }
  }
};
