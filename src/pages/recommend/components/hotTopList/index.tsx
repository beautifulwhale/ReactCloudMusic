import React, { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { ReduxState, useTypedDispatch } from '../../../../model/store'
import { getHotTopList } from '../../store/actions'
import HeaderTitle from '../../../../components/header-title'
import styles from './index.module.less'
import { PlayList } from '../../../../model/playlist'
import HotTopListItem from './cpns/hotTopListItem'

export default function HotTopList() {
  const { hotTopList } = useSelector(
    (state: ReduxState) => ({
      hotTopList: state.recommend.hotTopList
    }),
    shallowEqual
  )
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(getHotTopList(19723756))
    dispatch(getHotTopList(3779629))
    dispatch(getHotTopList(2884035))
  }, [dispatch])

  return (
    <>
      <div className={styles.hotlist}>
        <HeaderTitle title="榜单" />
        <div className={styles.oneList}>
          {hotTopList.map((item: PlayList) => {
            return <HotTopListItem key={item.id} topListItem={item} />
          })}
        </div>
      </div>
    </>
  )
}
