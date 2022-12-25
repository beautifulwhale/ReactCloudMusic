import request from './index'
import { BannerList } from '../model/banner'

export default function bannerList() {
  return request.request<BannerList>({
    url: '/banner'
  })
}
