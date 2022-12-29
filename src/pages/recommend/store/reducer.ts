import { Action } from 'redux'
import * as Types from './constant'
const initState = {
  bannerList: [],
  recommendPlayList:[]
}
function reducer(state = initState, action: any) {
  switch (action.type) {
    case Types.CHANGE_BANNERLIST:
      return { ...state, bannerList: action.banners }
    case Types.CHANGE_RECOMMENDPLAYLIST:
      return {...state,recommendPlayList:action.recommendPlayList}
    default:
      return { ...state }
  }
}

export default reducer
