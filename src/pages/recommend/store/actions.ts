import * as Types from './constant'
import bannerList from '../../../services/banner'
import hotRecommend from '../../../services/recommend'
import { Banner } from './../../../model/banner'
import { AppDispatch } from '../../../model/store'
import { Playlist } from '../../../model/recommend'

// banner
function changeBannerList(banners: Banner[]) {
  return {
    type: Types.CHANGE_BANNERLIST,
    banners
  }
}
export function getBannerListAction() {
  return (dispatch: AppDispatch) => {
    bannerList().then((res) => {
      dispatch(changeBannerList(res.banners))
    })
  }
}

// 推荐歌单
function changeHotRecommendList(recommendPlayList: Playlist[]) {
  return {
    type: Types.CHANGE_RECOMMENDPLAYLIST,
    recommendPlayList
  }
}
export function getHotRecommendList() {
  return async (dispatch: AppDispatch) => {
    const { code, result } = await hotRecommend()
    if (code === 200) {
      dispatch(changeHotRecommendList(result))
    }
  }
}
