import request from './index'
import { NewAlbumList } from '../model/newalbum'

export default function newAlbumList() {
  return request.request<NewAlbumList>({
    url: '/album/new',
    params: {
      limit: 10
    }
  })
}
