import React, { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import HeaderTitle from '../../../../components/header-title'
import { ReduxState, useTypedDispatch } from '../../../../model/store'
import { getHotRecommendList } from '../../store/actions'
import PlayList from '../../../../components/playlist'
import { Playlist } from '../../../../model/recommend'
import styles from './index.module.less'
export default function HotRecommend() {
  const menus = [
    {
      label: '华语',
      id: '1'
    },
    {
      label: '流行',
      id: '2'
    },
    {
      label: '摇滚',
      id: '3'
    },
    {
      label: '民谣',
      id: '4'
    },
    {
      label: '电子',
      id: '5'
    }
  ]
  const { recommendPlayList } = useSelector(
    (state: ReduxState) => ({
      recommendPlayList: state.recommend.recommendPlayList
    }),
    shallowEqual
  )
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(getHotRecommendList())
  }, [dispatch])
  return (
    <>
      <HeaderTitle title="热门推荐" menus={menus} />
      <div className={styles.playlistContent}>
        {recommendPlayList.map((item: Playlist) => {
          return <PlayList key={item.id} playlist={item} />
        })}
      </div>
    </>
  )
}
