import { Artist } from './artist'
export interface NewAlbumList {
  code: number
  albums: Album[]
}
export interface Album {
  id: number
  name: string
  picUrl: string
  artist: Artist
  publishTime: number

}
export interface AlbumSize {
  width: string
  height: string
  mskWidth: string
  backgroundPosition: string
}
