import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Slider } from 'antd'
import { shallowEqual, useSelector } from 'react-redux'
import styles from './index.module.less'
import { ReduxState, useTypedDispatch } from '../../model/store'
import { getSongDetail, getSongUrl } from './store/actions'
import { formatDate } from '../../utils/time'
import { getSizeImage } from '../../utils/format'
export default function Player() {
  const [isPlay, setPlay] = useState(false)
  const [currentPlayTime, setPlayTime] = useState(0)
  const [progressValue, setProgress] = useState(0)
  const audioRef = useRef<any>(null)
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
  const durtion = formatDate(songInfo.dt, 'mm:ss')
  const currentShowTime = formatDate(currentPlayTime, 'mm:ss')
  const plyClass = isPlay
    ? { backgroundPosition: '0 -165px' }
    : { backgroundPosition: '0 -204px' }
  // 播放/暂停
  const handlePlayer = useCallback(() => {
    isPlay ? audioRef.current.pause() : audioRef.current.play()
    setPlay(!isPlay)
  }, [isPlay])
  // 设置当时时间、进度条
  const handleTimeUpdate = (e: any) => {
    const currentTime = e.target.currentTime
    setPlayTime(currentTime * 1000)
    setProgress(((currentTime * 1000) / songInfo.dt) * 100)
  }
  //改变进度条
  const changePlayProgress = useCallback(
    (value: number) => {
      setPlayTime((value / 100) * songInfo.dt)
      setProgress(value)
    },
    [songInfo]
  )
  // 改变进度条后
  const afterChangePlay = useCallback(
    (value: number) => {
      const currentTime = ((value / 100) * songInfo.dt) / 1000
      audioRef.current.currentTime = currentTime
      setPlayTime(currentTime * 1000)
      if (!isPlay) {
        handlePlayer()
      }
    },
    [songInfo, isPlay, handlePlayer]
  )

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
                <img src={getSizeImage(songInfo.al?.picUrl, 35)} />
              </div>
              <div className={styles['progress']}>
                <div className={styles['music-info']}>
                  <a className={styles['music-name']}>{songInfo.name}</a>
                  <a className={styles['artist']}>{singerName}</a>
                </div>
                <div className={styles['slide']}>
                  <Slider
                    className={styles['sliderClass']}
                    value={progressValue}
                    onChange={changePlayProgress}
                    onAfterChange={afterChangePlay}
                  />
                </div>
              </div>
              <div className={styles['time']}>
                <span className={styles['current-time']}>
                  {currentShowTime}
                </span>
                <span>/</span>
                <span className={styles['duration']}>{durtion}</span>
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
