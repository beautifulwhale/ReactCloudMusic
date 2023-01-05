import { CHANGE_SONG_URL, CHANGE_SONG_DETAIL } from './constant'
import { songUrl, songDetail } from '../../../services/song'
import { AppDispatch } from '../../../model/store'
import { SongDetail } from '../../../model/song'

// 歌曲基本信息
function changeSongDetail(songInfo: SongDetail) {
  return {
    type: CHANGE_SONG_DETAIL,
    songInfo
  }
}

export function getSongDetail() {
  return async (dispatch: AppDispatch) => {
    const { code, songs } = await songDetail(254132);
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

export function getSongUrl() {
  return async (dispatch: AppDispatch) => {
    const { code, data } = await songUrl(254132);
    if (code === 200) {
      dispatch(changeSongUrl(data[0].url))
    }
  }
}
