import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getBannerListAction } from './store/actions'
import { ReduxState, useTypedDispatch } from '../../model/store'

function Recommend() {
  const dispatch = useTypedDispatch()
  const { bannerList } = useSelector(
    (state: ReduxState) => ({
      bannerList: state.recommend.bannerList
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getBannerListAction())
  }, [dispatch])

  return <div>{bannerList.length}</div>
}
export default Recommend
