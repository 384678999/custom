// import {
//   baseUrl, //引入baseUrl 
// } from "./env";
import axios from 'axios';
import url from './url'
import urlSimilar from './urlSimilar'
axios.defaults.timeout = 5000; //设置请求时间
axios.defaults.baseURL = 'http://yapi.demo.qunar.com/mock/19046/';//设置默认接口地址
const api = {
  url,
  urlSimilar
};


export default api;
axios.interceptors.request.use(function (config) {


  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config;

}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


