// import {
//   baseUrl, //引入baseUrl 
// } from "./env";
import axios from 'axios';
import url from './url'
axios.defaults.timeout = 10000; //设置请求时间
axios.defaults.baseURL = 'http://yapi.demo.qunar.com/mock/19046/';//设置默认接口地址
const api = {
  url
};


export default api;
axios.interceptors.request.use(function (config) {


  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config;

}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


