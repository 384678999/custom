import { get, post, put } from './encapsulation'
import qs from 'qs'
export default {
  // 放置接口
  get: (params) => get('get', params),
  post: (params) => post('post', params),
  _post: (params) => post('_post', params),
  put: (params) => put('put', params),
}