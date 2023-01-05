// 当前歌曲
import request from './index'
import { SongDetailRes, SongRes } from '../model/song'

// 获取歌曲详情
export function songDetail(id: number) {
  return request.request<SongDetailRes>({
    url: `/song/detail?ids=${id}`,
  })
}
// 获取歌曲url
export function songUrl(id: number) {
  return request.request<SongRes>({
    url: `/song/url?id=${id}`,
  })
}
