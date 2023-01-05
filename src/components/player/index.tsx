import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Slider } from 'antd'
import { shallowEqual, useSelector } from 'react-redux'
import styles from './index.module.less'
import { ReduxState, useTypedDispatch } from '../../model/store'
import { getSongDetail, getSongUrl } from './store/actions'
import { formatDate } from '../../utils/time'
export default function Player() {
  interface AudioRef {
    play: () => void
    pause: () => void
  }
  const [isPlay, setPlay] = useState(false)
  // const audioRef = useRef(null)
  const audioRef = useRef() as MutableRefObject<AudioRef>
  const { songInfo, songUrl } = useSelector(
    (state: ReduxState) => ({
      songInfo: state.player.songInfo,
      songUrl: state.player.songUrl
    }),
    shallowEqual
  )
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(getSongDetail())
    dispatch(getSongUrl())
  }, [dispatch])

  const singerName = (songInfo.ar && songInfo.ar[0].name) || '未知歌手'
  const plyClass = isPlay
    ? { backgroundPosition: '0 -165px' }
    : { backgroundPosition: '0 -204px' }
  // 播放/暂停
  const handlePlayer = () => {
    isPlay ? audioRef.current.pause() : audioRef.current.play()
    setPlay(!isPlay)
  }
  const handleTimeUpdate = (e: any) => {
    console.log('e', e)
  }

  return (
    <>
      <div className={styles['player-content']}>
        <div className={styles.bg}>
          <div className={styles['player-wrap']}>
            <div className={styles['player-btn']}>
              <a href="#" className={styles.prv}>
                上一曲
              </a>
              <a
                href="#"
                className={styles.ply}
                style={plyClass}
                onClick={() => handlePlayer()}
              >
                播放/暂停
              </a>
              <a href="#" className={styles.next}>
                下一曲
              </a>
            </div>
            <div className={styles['player-message']}>
              <div className={styles['img']}>
                <img src={songInfo.al?.picUrl} />
              </div>
              <div className={styles['progress']}>
                <div className={styles['music-info']}>
                  <a className={styles['music-name']}>{songInfo.name}</a>
                  <a className={styles['artist']}>{singerName}</a>
                </div>
                <div className={styles['slide']}>
                  <Slider className={styles['sliderClass']} defaultValue={30} />
                </div>
              </div>
              <div className={styles['time']}>
                <span className={styles['current-time']}>02:30</span>
                <span>/</span>
                <span className={styles['duration']}>
                  {formatDate(songInfo.dt, 'mm:ss')}
                </span>
              </div>
            </div>
            <div className={styles['player-operate']}>
              <div className={styles['fl-btns']}>
                <a href="#" className={styles['icn-pip']}>
                  画中画
                </a>
                <a href="#" className={styles['icn-add']}>
                  收藏
                </a>
                <a href="#" className={styles['icn-share']}>
                  分享
                </a>
              </div>
              <div className={styles['fpr-btns']}>
                <a href="#" className={styles['icn-vol']}>
                  画中画
                </a>
                <a href="#" className={styles['icn-loop']}>
                  收藏
                </a>
                <a href="#" className={styles['icn-list']}>
                  分享
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={songUrl}
        onTimeUpdate={(e) => handleTimeUpdate(e)}
      ></audio>
    </>
  )
}
