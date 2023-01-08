import {
  CHANGE_SONG_URL, CHANGE_SONG_DETAIL,
  CHANGE_CURRENTINDEX, CHANGE_PLAYLIST,
  CHANGE_PLAYPATTERN,
  CHANGE_LYRICLIST,
  CHANGE_CURRENTLYRIC
} from './constant'
import { songUrl, songDetail } from '../../../services/song'
import { AppDispatch } from '../../../model/store'
import { SongDetail } from '../../../model/song'
import { Tracks } from '../../../model/playlist'
import { getRandomNumber } from '../../../utils/random'
import songLyric from '../../../services/lyric'
import { parseLyric } from '../../../utils/parseLyric'
import { LyricList } from '../../../model/lyric'

// 歌曲基本信息
function changeSongDetail(songInfo: SongDetail) {
  return {
    type: CHANGE_SONG_DETAIL,
    songInfo
  }
}

export function getSongDetail(id: number) {
  return async (dispatch: AppDispatch) => {
    const { code, songs } = await songDetail(id);
    if (code === 200) {
      const currentSong = songs[0]
      dispatch(changeSongDetail(currentSong))
    }
  }
}

// 获取歌曲url
function changeSongUrl(songUrl: string) {
  return {
    type: CHANGE_SONG_URL,
    songUrl
  }
}

export function getSongUrl(id: number) {
  return async (dispatch: AppDispatch) => {
    const { code, data } = await songUrl(id);
    if (code === 200) {
      dispatch(changeSongUrl(data[0].url))
    }
  }
}

// 歌曲当前坐标
function changeCurrentIndex(index: number) {
  return {
    type: CHANGE_CURRENTINDEX,
    currentIndex: index
  }
}

// 歌曲列表
function changePlaylist(playlist: SongDetail[]) {
  return {
    type: CHANGE_PLAYLIST,
    playlist
  }
}

// 添加歌曲到播放列表
export function appendMusicToListAction(song: Tracks) {
  return (dispatch: AppDispatch, getState: any) => {
    const { playlist } = getState().player
    const newPlaylist = [...playlist]
    const currentSongIndex = playlist.findIndex((item: SongDetail) => item.id === song.id);
    // 播放列表不包含当前添加的歌曲
    if (currentSongIndex === -1) {
      newPlaylist.push(song)
      dispatch(changePlaylist(newPlaylist))
      dispatch(changeCurrentIndex(newPlaylist.length - 1))
      dispatch(getLyric(song.id))
    } else {
      dispatch(changeCurrentIndex(currentSongIndex))
      dispatch(getLyric(song.id))
    }
  }
}

// 改变播放模式
export function changePlayPattern(playPattern: string) {
  return {
    type: CHANGE_PLAYPATTERN,
    playPattern
  }
}

// 改变上一首、下一首通过播放模式
export function changeMusicPlayByPattern(type: number) {
  return (dispatch: AppDispatch, getState: any) => {
    const { playPattern, currentIndex, playlist } = getState().player
    let currentSong = null
    switch (playPattern) {
      case 'sequence':
        // 顺序播放
        let newCurrentIndex = currentIndex
        newCurrentIndex += type;
        if (newCurrentIndex >= playlist.length) newCurrentIndex = 0;
        if (newCurrentIndex < 0) newCurrentIndex = playlist.length - 1;
        currentSong = playlist[newCurrentIndex]
        dispatch(changeCurrentIndex(newCurrentIndex))
        break;
      case 'random':
        // 随机播放
        let randomIndex = getRandomNumber(playlist.length)
        while (randomIndex === currentIndex) {
          randomIndex = getRandomNumber(playlist.length);
        }
        currentSong = playlist[randomIndex]
        dispatch(changeCurrentIndex(randomIndex))
      default:
        break;
    }
    dispatch(getSongUrl(currentSong.id))
    dispatch(changeSongDetail(currentSong))
  }
}

// 改变歌词
function changeSongLyric(lyricList: LyricList[]) {
  return {
    type: CHANGE_LYRICLIST,
    lyricList
  }
}
export function getLyric(id: number) {
  return async (dispatch: AppDispatch) => {
    const { code, lrc } = await songLyric(id)
    if (code === 200) {
      // 改变歌词格式
      const lyricList = parseLyric(lrc?.lyric)
      dispatch(changeSongLyric(lyricList))
    }
  }
}

// 改变当前播放歌词
export function changeCurrentLyric(currentLyricIndex: number) {
  return {
    type: CHANGE_CURRENTLYRIC,
    currentLyricIndex
  }
}
