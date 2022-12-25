import { Action } from 'redux'
import * as Types from './constant'
const initState = {
  bannerList: []
}
function reducer(state = initState, action: any) {
  switch (action.type) {
    case Types.CHANGE_BANNERLIST:
      return { ...state, bannerList: action.banners }
    default:
      return { ...state }
  }
}

export default reducer
