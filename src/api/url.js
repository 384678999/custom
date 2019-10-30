import { get, post, put } from './encapsulation'
import qs from 'qs'
export default {
  // one: (params) => get('https://www.easy-mock.com/mock/5db6b44809633f24be4ca177/custom/one', params),
  get: (params) => get('get', params),
  post: (params) => post('post', params),
  _post: (params) => post('_post', params),
  put: (params) => put('put', params),
  // aaa: (params) => put('http://yapi.demo.qunar.com/mock/19046/aaa', params),
}