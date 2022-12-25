import * as Types from './constant'
import bannerList from '../../../services/banner'
import { Banner } from './../../../model/banner';

function changeBannerList(banners: Banner[]) {
  return {
    type: Types.CHANGE_BANNERLIST,
    banners
  }
}

export function getBannerListAction() {
  return (dispatch: any) => {
    bannerList().then(res => {
      dispatch(changeBannerList(res.banners))
    })
  }
}
