import * as loginService from './service';

export default {
  namespace: 'login',
  state: {
    loading: false,
  },

  reducers: {
    changeSubmitting(state, {payload: loading}) {
      return {
        ...state,
        loading,
      }
    }
  },

  effects: {
    //账号密码登录
    * accountLogin({payload: postData, callback}, {call, put}) {
      console.log(postData);
      yield put({type: 'changeSubmitting', payload: true});
      const response = yield call(loginService.usernameLogin, postData);
      if (callback) {
        callback(response);
      }
      return response;
    }
  }
}