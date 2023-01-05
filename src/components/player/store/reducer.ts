import { CHANGE_SONG_URL, CHANGE_SONG_DETAIL } from './constant'

const initState = {
  songUrl: "",
  songInfo: {}
}
export default function reducer(state = initState, actions: any) {
  switch (actions.type) {
    case CHANGE_SONG_DETAIL:
      return { ...state, songInfo: actions.songInfo }
    case CHANGE_SONG_URL:
      return { ...state, songUrl: actions.songUrl }
    default:
      return { ...state }
  }
}

