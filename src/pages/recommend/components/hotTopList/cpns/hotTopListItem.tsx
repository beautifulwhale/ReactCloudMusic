import React, { Fragment, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './index.module.less'
import { PlayList, Tracks } from '../../../../../model/playlist'
import { useTypedDispatch } from '../../../../../model/store'
import {
  appendMusicToListAction,
  getSongDetail,
  getSongUrl
} from '../../../../../components/player/store/actions'

type FcProps = {
  children?: unknown
  topListItem: PlayList
}
export default function HotTopListItem({ topListItem }: FcProps) {
  const [isHover, setHover] = useState(false)
  const [currentIndex, setIndex] = useState(0)
  const cx = classNames.bind(styles)
  const dispatch = useTypedDispatch()
  const mskClass = cx({
    msk: true,
    sprite_covor: true
  })
  const playClass = cx({
    play: true,
    sprite_02: true
  })
  const collectClass = cx({
    collect: true,
    sprite_02: true
  })
  const playIconClass = cx({
    sprite_02: true,
    'one-btn': true,
    'play-icon': true
  })
  const appendIconClass = cx({
    'one-btn': true,
    'append-icon': true,
    sprite_icon2: true
  })
  const collectIconClass = cx({
    'one-btn': true,
    'collect-icon': true,
    sprite_02: true
  })
  const handleMouseEnter = (index: number) => {
    setHover(true)
    setIndex(index)
  }
  const handleMouseLeave = (index: number) => {
    setHover(false)
    setIndex(index)
  }
  const playMusic = (song: Tracks) => {
    dispatch(getSongUrl(song.id))
    dispatch(getSongDetail(song.id))
    dispatch(appendMusicToListAction(song))
  }
  return (
    <>
      <div className={styles['top-list-item']}>
        <div className={styles['top']}>
          <div className={styles['img-content']}>
            <img src={topListItem.coverImgUrl} alt={topListItem.name} />
            <a
              href={`/toplist?id=${topListItem.id}`}
              title={topListItem.name}
              className={mskClass}
            ></a>
          </div>
          <div className={styles['title-ct']}>
            <a href={`/toplist?id=${topListItem.id}`} title={topListItem.name}>
              <h3>{topListItem.name}</h3>
            </a>
            <div className={styles.btn}>
              <a className={playClass}>播放</a>
              <a className={collectClass}>收藏</a>
            </div>
          </div>
        </div>
        <div className={styles['song-ul']}>
          {topListItem.tracks.slice(0, 10).map((item, index) => {
            return (
              <Fragment key={item.id}>
                <div
                  className={styles['song-li']}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <span
                    className={styles['number']}
                    style={{ color: index < 3 ? '#c10d0c' : '' }}
                  >
                    {index + 1}
                  </span>
                  <a
                    className={styles['name']}
                    href={`/song?id=${item.id}`}
                    title={item.name}
                  >
                    {item.name}
                  </a>
                  <span
                    style={{
                      visibility:
                        isHover && currentIndex === index ? 'visible' : 'hidden'
                    }}
                    className={styles['operate-btn']}
                  >
                    <span
                      className={playIconClass}
                      onClick={() => {
                        playMusic(item)
                      }}
                    ></span>
                    <span className={appendIconClass}></span>
                    <span className={collectIconClass}></span>
                  </span>
                </div>
                {index === 9 && (
                  <div className={styles['more']}>
                    <a href={`/toplist?id=${item.id}`}>查看全部</a>
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </>
  )
}
