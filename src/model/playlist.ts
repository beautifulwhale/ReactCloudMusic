export interface PlayList {
  id: number
  name: string
  coverImgUrl: string
  createTime: number
  tags: string[]
  creator: Creator
  tracks:Tracks[]
}
// 歌单创造者
export interface Creator {
  avatarUrl: string
  gender: number
  nickname: string
  description: string
  tracks: Tracks[]
}
// 歌单歌曲
export interface Tracks {
  name: string
  id: number
  ar: Ar[]
}
// 歌曲作者
export interface Ar {
  id: number
  name: string
}
// 歌曲专辑
export interface Al {
  id: number
  name: string
  picUrl: string
}
export interface PlayListRes {
  playlist: PlayList
  code: number
}
