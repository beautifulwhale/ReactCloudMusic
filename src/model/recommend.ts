export interface HotRecommend {
  code: number
  result: Playlist[]
}
export interface Playlist {
  id: number
  name: string
  picUrl: string
  playCount: number
}
