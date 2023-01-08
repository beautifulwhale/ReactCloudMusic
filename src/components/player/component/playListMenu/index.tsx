import React, { Fragment, useEffect, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import styles from './index.module.less'
import { ReduxState } from '../../../../model/store'
import { SongDetail } from '../../../../model/song'
import { LyricList } from '../../../../model/lyric'
import { scrollTo } from '../../../../utils/scroll'
import { formatDate } from '../../../../utils/time'
export default function PlayListMenu() {
  const { playlist, songInfo, lyricList, currentLyricIndex } = useSelector(
    (state: ReduxState) => ({
      playlist: state.player.playlist,
      songInfo: state.player.songInfo,
      lyricList: state.player.lyricList,
      currentLyricIndex: state.player.currentLyricIndex
    }),
    shallowEqual
  )
  const panelRef = useRef(null)
  useEffect(()=> {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  },[currentLyricIndex])
  return (
    <div className={styles['playlist-menu']}>
      <div className={styles['title']}>
        <div className={styles['left-title']}>
          <h4>播放列表({playlist.length})</h4>
          <div className={styles['operator']}>
            <span className={styles['span-ct']}>
              <a className={styles['collect-all']}></a>
              <span className={styles['title']}>收藏全部</span>
            </span>
            <span className={styles['span-ct']}>
              <a className={styles['clear']}></a>
              <span className={styles['title']}>清除</span>
            </span>
          </div>
        </div>
        <div className={styles['right-title']}>
          <h4>{songInfo.name}</h4>
        </div>
      </div>
      <div className={styles['listbd']}>
        <div className={styles['listbdc']}>
          <ul className={styles['f-cb']}>
            {playlist.map((item: SongDetail) => {
              return (
                <Fragment key={item.id}>
                  <li
                    className={styles['song-info']}
                    style={{ color: item.id === songInfo.id ? '#fff' : '' }}
                  >
                    <div className={styles['song-name']}>
                      <div
                        className={
                          item.id === songInfo.id
                            ? styles['play-icon']
                            : styles['play-empty']
                        }
                      ></div>
                      <span className={styles['name']}>{item.name}</span>
                    </div>
                    <div className={styles['song-message']}>
                      <div className={styles['song-artist']}>
                        {item?.ar[0].name}
                      </div>
                      <div className={styles['song-time']}>
                        {formatDate(item.dt, 'mm:ss')}
                      </div>
                    </div>
                  </li>
                </Fragment>
              )
            })}
          </ul>
        </div>
        <div className={styles['lyric-content']}>
          <div className={styles['listltric']} ref={panelRef}>
            {lyricList.map((item: LyricList, index: number) => {
              return (
                <p
                  key={item.time}
                  className={styles['j-flag']}
                  style={{
                    color: currentLyricIndex === index ? '#fff' : '',
                    fontSize: currentLyricIndex === index ? '14px' : ''
                  }}
                >
                  {item.content}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
