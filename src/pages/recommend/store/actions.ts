import * as Types from './constant'
import bannerList from '../../../services/banner'
import hotRecommend from '../../../services/recommend'
import { Banner } from './../../../model/banner'
import { AppDispatch } from '../../../model/store'
import { PlayList } from '../../../model/playlist'
import newAlbumList from '../../../services/newalbum'
import { Album } from '../../../model/newalbum'
import hotTopList from '../../../services/hotTopList'
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

// 推荐页榜单
function changeHotTopList(hotTopList: PlayList[]) {
  return {
    type: Types.CHANGE_HOTTOPLIST,
    hotTopList
  }
}
let allHotTopList: PlayList[] = []
export function getHotTopList(id: number) {
  return async (dispatch: AppDispatch) => {
    const { code, playlist } = await hotTopList(id)
    if (code === 200) {
      allHotTopList.push(playlist)
    }
    if (allHotTopList.length === 3) {
      dispatch(changeHotTopList(allHotTopList))
    }
  }
}
