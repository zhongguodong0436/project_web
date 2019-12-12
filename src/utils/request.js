import axios from 'axios';
import qs from 'qs';

// 实现对api的调用之前，先创建实例
// const instance = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     timeout: 2000,
//     withCredentials: true
// });

/**
 * 添加请求拦截器 ，意思就是发起请求接口之前做什么事
 **/
window.api_host = Globals.API_HOST;
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么 1.设置请求头 2.携带token信息
  config.url = window.api_host + config.url;
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  // config.setHeaders([
  //     ...
  // ]);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


export const request = (config) => {
  return axios.request(config)
    .then(function (response) {
      if (response && (response.status === 200 || response.status === 304 || response.status === 501)) {
        return response.data;
      }
    }).catch(function (error) {
      console.log(error);
    })
};

export const GET = (url, data, config) => {
  const CONF = {
    url,
    method: 'get',
    params: data,
  };
  return request({...CONF, ...config})
};

export const POST = (url, data, config) => {
  const CONF = {
    url,
    method: 'post',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    data: qs.stringify(data),
  };
  return request({...CONF, ...config});
};
