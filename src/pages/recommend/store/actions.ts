import * as Types from './constant'
import bannerList from '../../../services/banner'
import { Banner } from './../../../model/banner';
import { AppDispatch } from '../../../model/store';
function changeBannerList(banners: Banner[]) {
  return {
    type: Types.CHANGE_BANNERLIST,
    banners
  }
}

export function getBannerListAction() {
  return (dispatch: AppDispatch) => {
    bannerList().then(res => {
      dispatch(changeBannerList(res.banners))
    })
  }
}
