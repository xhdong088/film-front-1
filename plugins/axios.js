import axios from 'axios'
import Cookies from 'js-cookie'
import qs from 'qs'
const service = axios.create();
// POST 传参序列化
service.interceptors.request.use(
  config => {
    let token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = token
    }
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  post(url, data) {
    return service({
      method: 'post',
      url,
      params: data
    })
  },
  get(url, data) {
    return service({
      method: 'get',
      url,
      params: data
    })
  },
  delete(url, data) {
    return service({
      methods: 'delete',
      url,
      params: data
    })
  }
}
