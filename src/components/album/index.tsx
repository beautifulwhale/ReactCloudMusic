import classNames from 'classnames/bind'
import React from 'react'
import { Album, AlbumSize } from '../../model/newalbum'
import styles from './index.module.less'
type FcProps = {
  children?: any
  album: Album
  size: AlbumSize
}
export default function AlbumCover(props: FcProps) {
  const { album, size } = props
  const currentWidthHeight = { width: size.width, height: size.height }
  const mskPropsClass = {
    width: size.mskWidth,
    height: size.height,
    backgroundPosition: size.backgroundPosition
  }
  const cx = classNames.bind(styles)
  const mskClass = cx({
    msk: true,
    sprite_covor: true
  })
  return (
    <>
      <div className={styles['album-content']}>
        <div className={styles['bg-img']} style={currentWidthHeight}>
          <img src={album.picUrl} alt={album.name} style={currentWidthHeight} />
          <a
            href={`/album?id=${album.id}`}
            title={album.name}
            className={mskClass}
            style={mskPropsClass}
          ></a>
        </div>
        <div className={styles.albumName}>
          <a href={`/album?id=${album.id}`} title={album.name}>{album.name}</a>
        </div>
        <div className={styles.artist}>
          <a href={`/artist?id=${album.id}`} title={album.name}>
            {album.artist.name}
          </a>
        </div>
      </div>
    </>
  )
}
