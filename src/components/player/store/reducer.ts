import { CHANGE_SONG_URL, CHANGE_SONG_DETAIL, CHANGE_CURRENTINDEX, CHANGE_PLAYLIST, CHANGE_PLAYPATTERN } from './constant'

const initState = {
  songUrl: "",
  songInfo: {},
  currentIndex: 0,
  playlist: [
    {
      "name": "起风了",
      "id": 1330348068,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12085562,
          "name": "买辣椒也用券",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "原曲：《ヤキモチ》—高桥优"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 43,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 74715426,
        "name": "起风了",
        "picUrl": "https://p2.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg",
        "tns": [],
        "pic_str": "109951163699673355",
        "pic": 109951163699673360
      },
      "dt": 325868,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 13037236,
        "vd": -77525,
        "sr": 44100
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 7822359,
        "vd": -74987,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 5214920,
        "vd": -73504,
        "sr": 44100
      },
      "sq": {
        "br": 985873,
        "fid": 0,
        "size": 40158105,
        "vd": -77508,
        "sr": 44100
      },
      "hr": {
        "br": 2832349,
        "fid": 0,
        "size": 115371553,
        "vd": -77476,
        "sr": 88200
      },
      "a": null,
      "cd": "1",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 536879104,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 43,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "awardTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1415923,
      "mv": 10782615,
      "publishTime": 1543766400000
    }
  ],
  playPattern: 'sequence'
}
export default function reducer(state = initState, actions: any) {
  switch (actions.type) {
    case CHANGE_SONG_DETAIL:
      return { ...state, songInfo: actions.songInfo }
    case CHANGE_SONG_URL:
      return { ...state, songUrl: actions.songUrl }
    case CHANGE_CURRENTINDEX:
      return { ...state, currentIndex: actions.currentIndex }
    case CHANGE_PLAYLIST:
      return { ...state, playlist: actions.playlist }
    case CHANGE_PLAYPATTERN:
      return { ...state, playPattern: actions.playPattern }
    default:
      return { ...state }
  }
}

