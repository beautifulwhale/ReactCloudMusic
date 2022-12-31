import { Action } from 'redux'
import * as Types from './constant'
const initState = {
  bannerList: [],
  recommendPlayList: [],
  newAlbumList: [],
  hotTopList: []
}
function reducer(state = initState, action: any) {
  switch (action.type) {
    case Types.CHANGE_BANNERLIST:
      return { ...state, bannerList: action.banners }
    case Types.CHANGE_RECOMMENDPLAYLIST:
      return { ...state, recommendPlayList: action.recommendPlayList }
    case Types.CHANGE_NEWALBUM:
      return { ...state, newAlbumList: action.newAlbumList }
    case Types.CHANGE_HOTTOPLIST:
      return { ...state, hotTopList: action.hotTopList }
    default:
      return { ...state }
  }
}

export default reducer
