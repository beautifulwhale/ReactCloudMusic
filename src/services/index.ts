import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const baseUrl =
  import.meta.env.VITE_MODE === 'development' ? import.meta.env.VITE_BASEURL : ''

class myRequest {
  instance: AxiosInstance
  baseConfig: AxiosRequestConfig = { baseURL: baseUrl, timeout: 5000 }
  constructor(config: AxiosRequestConfig) {
    console.log('baseUrl', baseUrl)

    this.instance = axios.create(Object.assign(this.baseConfig, config))

    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

        // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

        // 3.对请求的参数进行序列化(看服务器是否需要序列化)
        // config.data = qs.stringify(config.data)
        // console.log(config);

        // 4.等等
        return config
      },
      (err: any) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response
        return data
      },
      (err: any) => {
        let message = ''
        switch (err.response && err.response.status) {
          case 400:
            message = '请求错误(400)'
            break
          case 401:
            message = '未授权，请重新登录(401)'
            // 这里可以做清空storage并跳转到登录页的操作
            break
          case 403:
            message = '拒绝访问(403)'
            break
          case 404:
            message = '请求出错(404)'
            break
          case 408:
            message = '请求超时(408)'
            break
          case 500:
            message = '服务器错误(500)'
            break
          case 501:
            message = '服务未实现(501)'
            break
          case 502:
            message = '网络错误(502)'
            break
          case 503:
            message = '服务不可用(503)'
            break
          case 504:
            message = '网络超时(504)'
            break
          case 505:
            message = 'HTTP版本不受支持(505)'
            break
          default:
            message = `连接出错(${err.response && err.response.status})!`
            console.log(message)
        }
      }
    )
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
export default new myRequest({})
