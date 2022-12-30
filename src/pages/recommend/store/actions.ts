import * as Types from './constant'
import bannerList from '../../../services/banner'
import hotRecommend from '../../../services/recommend'
import { Banner } from './../../../model/banner'
import { AppDispatch } from '../../../model/store'
import { Playlist } from '../../../model/recommend'
import newAlbumList from '../../../services/newalbum'
import { Album } from '../../../model/newalbum'

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

// 推荐页新碟上架
function changeNewAlbum(newAlbumList: Album[]) {
  return {
    type: Types.CHANGE_NEWALBUM,
    newAlbumList
  }
}
export function getNewAlbumList() {
  return async (dispatch: AppDispatch) => {
    const { code, albums } = await newAlbumList()
    if (code === 200) {
      dispatch(changeNewAlbum(albums))
    }
  }
}
