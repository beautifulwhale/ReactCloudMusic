import { Action } from 'redux'
import * as Types from './constant'
const initState = {
  bannerList: [],
  recommendPlayList: [],
  newAlbumList: []
}
function reducer(state = initState, action: any) {
  switch (action.type) {
    case Types.CHANGE_BANNERLIST:
      return { ...state, bannerList: action.banners }
    case Types.CHANGE_RECOMMENDPLAYLIST:
      return { ...state, recommendPlayList: action.recommendPlayList }
    case Types.CHANGE_NEWALBUM:
      return { ...state, newAlbumList: action.newAlbumList }
    default:
      return { ...state }
  }
}

export default reducer
