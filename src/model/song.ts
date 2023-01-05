import { Ar, Al } from "./playlist"
export interface SongDetailRes {
  code: number,
  songs: SongDetail[]
}

export interface SongRes {
  data: Song[]
  code: number
}
export interface Song {
  id: number
  url: string
  level: string
}
export interface SongDetail {
  name: string
  id: number
  ar: Ar[]
  al: Al
  dt: number
  publishTime: number
}
