import request from './index'
import { PlayListRes } from '../model/playlist'

export default function hotTopList(id:number) {
  return request.request<PlayListRes>({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
