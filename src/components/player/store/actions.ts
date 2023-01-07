import { CHANGE_SONG_URL, CHANGE_SONG_DETAIL, CHANGE_CURRENTINDEX, CHANGE_PLAYLIST } from './constant'
import { songUrl, songDetail } from '../../../services/song'
import { AppDispatch } from '../../../model/store'
import { SongDetail } from '../../../model/song'
import { Tracks } from '../../../model/playlist'

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
    } else {
      dispatch(changeCurrentIndex(currentSongIndex))
    }
  }
}
