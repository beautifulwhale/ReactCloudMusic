import request from './index'

interface Banner {
  targetId: string,
  imageUrl: string
}
interface BannerList {
  code: number,
  banners: Banner[]
}

export default function bannerList() {
  return request.request<BannerList>({
    url: '/banner'
  })
}
