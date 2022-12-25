import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getBannerListAction } from './store/actions'
import { Banner } from '../../model/banner'

type FCProps = {
  children?: any
  bannerList: Banner[]
  getBannerList: () => void
}
function Recommend(props: FCProps) {
  const { getBannerList, bannerList } = props
  useEffect(() => {
    getBannerList()
  }, [getBannerList])

  return <div>{bannerList.length}</div>
}

const mapStateToProps = (state: any) => ({
  bannerList: state.recommend.bannerList
})
const mapDispatchToProps = (dispatch: any) => ({
  getBannerList: () => {
    dispatch(getBannerListAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
