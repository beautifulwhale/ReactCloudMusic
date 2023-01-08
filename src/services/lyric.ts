import request from './index'
import { LyricRes } from '../model/lyric'

export default function songLyric(id: number) {
  return request.request<LyricRes>({
    url: `/lyric?id=${id}`
  })
}
