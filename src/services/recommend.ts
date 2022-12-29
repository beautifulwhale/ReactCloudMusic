import request from './index'
import { HotRecommend } from '../model/recommend'

// 热门推荐歌单
export default function hotRecommend() {
  return request.request<HotRecommend>({
    url: '/personalized',
    params: {
      limit: 8
    }
  })
}
