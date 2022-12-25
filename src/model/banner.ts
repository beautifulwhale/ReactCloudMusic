export interface Banner {
  targetId: string,
  imageUrl: string
}
export interface BannerList {
  code: number,
  banners: Banner[]
}
