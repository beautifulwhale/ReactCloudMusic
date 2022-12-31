import React, { useEffect, useRef } from 'react'
import { Carousel } from 'antd'
import { shallowEqual, useSelector } from 'react-redux'
import HeaderTitle from '../../../../components/header-title'
import { useTypedDispatch } from '../../../../model/store'
import { ReduxState } from '../../../../store'
import { getNewAlbumList } from '../../store/actions'
import styles from './index.module.less'
import { Album } from '../../../../model/newalbum'
import AlbumCover from '../../../../components/album'
import classNames from 'classnames/bind'

export default function NewAlbum() {
  const size = {
    width: '100px',
    height: '100px',
    mskWidth: '118px',
    backgroundPosition: '0 -570px'
  }
  const cx = classNames.bind(styles)
  const carouselClass = cx({
    'ant-carousel': true,
    'slick-slide': true
  })
  const leftArrow = cx({
    arrow: true,
    'left-arrow': true,
    sprite_02: true
  })
  const rightArrow = cx({
    arrow: true,
    'right-arrow': true,
    sprite_02: true
  })
  const carouselRef: any = useRef(null)
  const { newAlbumList } = useSelector(
    (state: ReduxState) => ({
      newAlbumList: state.recommend.newAlbumList
    }),
    shallowEqual
  )
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(getNewAlbumList())
  }, [dispatch])
  return (
    <>
      <div className={styles.newAlbumContent}>
        <HeaderTitle title="新碟上架" />
        <div className={styles.content}>
          <span
            className={leftArrow}
            onClick={() => carouselRef.current.prev()}
          ></span>
          <div className={styles.roll}>
            <Carousel ref={carouselRef} dots={false} className={carouselClass}>
              {[0, 1].map((item) => {
                return (
                  <div key={item} className={styles.oneAlbum}>
                    {newAlbumList
                      .slice(item * 5, (item + 1) * 5)
                      .map((one: Album) => {
                        return (
                          <AlbumCover key={one.id} size={size} album={one} />
                        )
                      })}
                  </div>
                )
              })}
            </Carousel>
          </div>
          <span
            className={rightArrow}
            onClick={() => carouselRef.current.next()}
          ></span>
        </div>
      </div>
    </>
  )
}
