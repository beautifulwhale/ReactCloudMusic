import React, { useCallback, useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Carousel } from 'antd'
import { getBannerListAction } from '../../store/actions'
import { ReduxState, useTypedDispatch } from '../../../../model/store'
import styles from './index.module.less'
import { Banner } from '../../../../model/banner'
import classNames from 'classnames/bind'

export default function Banners() {
  const cx = classNames.bind(styles)
  const leftClass = cx({
    btn: true,
    left: true
  })
  const rightClass = cx({
    btn: true,
    right: true
  })
  const carouselClass = cx({
    'slick-active': true,
    'slick-dots li button': true
  })
  const dispatch = useTypedDispatch()
  const [currentIndex, setCurrentIndex] = useState(0)
  const { bannerList } = useSelector(
    (state: ReduxState) => ({
      bannerList: state.recommend.bannerList
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getBannerListAction())
  }, [dispatch])

  // 轮播图切换
  const bannerChange = useCallback((from: number, to: number) => {
    setCurrentIndex(to)
  }, [])

  // 背景高斯模糊图片
  const backgroundImageUrl =
    bannerList[currentIndex]?.imageUrl + '?imageView&blur=40x20'
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className={styles.banners}>
        <div className={styles['ban-img']}>
          <Carousel effect="fade" autoplay beforeChange={bannerChange}>
            {bannerList.map((item: Banner) => {
              return (
                <div className={styles['banner-item']} key={item.targetId}>
                  <img className={styles['img']} src={item.imageUrl} />
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className={styles['ban-pr']}></div>
      </div>
      {/* <div className={styles['ban-control']}>
        <button className={leftClass}></button>
        <button className={rightClass}></button>
      </div> */}
    </div>
  )
}
