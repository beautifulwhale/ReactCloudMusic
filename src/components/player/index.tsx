import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Slider } from 'antd'
import { shallowEqual, useSelector } from 'react-redux'
import styles from './index.module.less'
import { ReduxState, useTypedDispatch } from '../../model/store'
import {
  getSongDetail,
  getSongUrl,
  changePlayPattern,
  changeMusicPlayByPattern,
  getLyric,
  changeCurrentLyric
} from './store/actions'
import { formatDate } from '../../utils/time'
import { getSizeImage } from '../../utils/format'
export default function Player() {
  enum PlayPattern {
    sequence = 'sequence',
    random = 'random',
    loop = 'loop'
  }
  const [isPlay, setPlay] = useState(false)
  const [currentPlayTime, setPlayTime] = useState(0)
  const [progressValue, setProgress] = useState(0)
  const [currentMode, setPlayMode] = useState(PlayPattern.sequence)
  const [playIconClass, setPlayIconClass] = useState({
    backgroundPosition: ' -3px -344px'
  })
  const audioRef = useRef<any>(null)
  const { songInfo, songUrl, lyricList, currentLyricIndex } = useSelector(
    (state: ReduxState) => ({
      songInfo: state.player.songInfo,
      songUrl: state.player.songUrl,
      lyricList: state.player.lyricList,
      currentLyricIndex: state.player.currentLyricIndex
    }),
    shallowEqual
  )
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(getSongDetail(1330348068))
    dispatch(getSongUrl(1330348068))
    dispatch(getLyric(1330348068))
  }, [dispatch])

  useEffect(() => {
    audioRef.current
      .play()
      .then(() => {
        setPlay(true)
      })
      .catch(() => {
        setPlay(false)
      })
  }, [songInfo, songUrl])

  const singerName = (songInfo?.ar && songInfo?.ar[0].name) || '未知歌手'
  const durtion = formatDate(songInfo?.dt, 'mm:ss')
  const currentShowTime = formatDate(currentPlayTime, 'mm:ss')
  const plyClass = isPlay
    ? { backgroundPosition: '0 -165px' }
    : { backgroundPosition: '0 -204px' }

  // 播放/暂停
  const handlePlayer = useCallback(() => {
    isPlay ? audioRef.current?.pause() : audioRef.current.play()
    setPlay(!isPlay)
  }, [isPlay])
  // 设置当时时间、进度条
  const handleTimeUpdate = (e: any) => {
    const currentTime = e.target.currentTime
    setPlayTime(currentTime * 1000)
    setProgress(((currentTime * 1000) / songInfo?.dt) * 100)

    // 匹配当前歌词
    let lyricIndex = 0
    for (let i = 0; i < lyricList.length; i++) {
      if (currentTime * 1000 < lyricList[i].time) {
        lyricIndex = i - 1
        break
      }
    }
    if (currentLyricIndex !== lyricIndex) {
      dispatch(changeCurrentLyric(lyricIndex))
    }
  }
  //改变进度条
  const changePlayProgress = useCallback(
    (value: number) => {
      setPlayTime((value / 100) * songInfo?.dt)
      setProgress(value)
    },
    [songInfo]
  )
  // 改变进度条后
  const afterChangePlay = useCallback(
    (value: number) => {
      const currentTime = ((value / 100) * songInfo?.dt) / 1000
      audioRef.current.currentTime = currentTime
      setPlayTime(currentTime * 1000)
      if (!isPlay) {
        handlePlayer()
      }
    },
    [songInfo, isPlay, handlePlayer]
  )
  // 改变播放模式
  const changePlayMode = () => {
    switch (currentMode) {
      case 'sequence':
        setPlayMode(PlayPattern.random)
        setPlayIconClass({ backgroundPosition: ' -66px -248px' })
        dispatch(changePlayPattern(PlayPattern.random))
        break
      case 'random':
        setPlayMode(PlayPattern.loop)
        setPlayIconClass({ backgroundPosition: ' -93px -344px' })
        dispatch(changePlayPattern(PlayPattern.loop))
        break
      case 'loop':
        setPlayMode(PlayPattern.sequence)
        setPlayIconClass({ backgroundPosition: ' -3px -344px' })
        dispatch(changePlayPattern(PlayPattern.sequence))
        break
      default:
        break
    }
  }

  // 切换上一首、下一首
  const changeMusic = (type: number) => {
    // 循环播放处理
    if (currentMode === 'loop') {
      audioRef.current.currentTime = 0
      audioRef.current.play()
      return
    }
    dispatch(changeMusicPlayByPattern(type))
  }

  // 循环歌曲播放完
  const handleMusicEnd = () => {
    if (currentMode === 'loop') {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }
  return (
    <>
      <div className={styles['player-content']}>
        <div className={styles.bg}>
          <div className={styles['player-wrap']}>
            <div className={styles['player-btn']}>
              <a
                href="#!"
                className={styles.prv}
                onClick={() => changeMusic(-1)}
              >
                上一曲
              </a>
              <a
                href="#!"
                className={styles.ply}
                style={plyClass}
                onClick={() => handlePlayer()}
              >
                播放/暂停
              </a>
              <a
                href="#!"
                className={styles.next}
                onClick={() => changeMusic(1)}
              >
                下一曲
              </a>
            </div>
            <div className={styles['player-message']}>
              <div className={styles['img']}>
                <img src={getSizeImage(songInfo?.al?.picUrl, 35)} />
              </div>
              <div className={styles['progress']}>
                <div className={styles['music-info']}>
                  <a className={styles['music-name']}>{songInfo?.name}</a>
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
                <a href="#!" className={styles['icn-pip']}>
                  画中画
                </a>
                <a href="#!" className={styles['icn-add']}>
                  收藏
                </a>
                <a href="#!" className={styles['icn-share']}>
                  分享
                </a>
              </div>
              <div className={styles['fpr-btns']}>
                <a href="#!" className={styles['icn-vol']}>
                  声音
                </a>
                <a
                  href="#!"
                  style={playIconClass}
                  onClick={() => changePlayMode()}
                >
                  播放模式
                </a>
                <a href="#!" className={styles['icn-list']}>
                  播放列表
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
        onEnded={() => handleMusicEnd()}
      ></audio>
    </>
  )
}
