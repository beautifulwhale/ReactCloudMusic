import React from 'react'
import { PlayCircleOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import { Playlist } from '../../model/recommend'
import styles from './index.module.less'
import { getCount } from '../../utils/format'
import classNames from 'classnames/bind'
type FcProps = {
  children?: unknown
  playlist: Playlist
}
export default function PlayList(props: FcProps) {
  const { playlist } = props
  const cx = classNames.bind(styles)
  // const imgContentClass = cx({
  //   'imgContent':true,
  //   'sprite_covor':true
  // })
  return (
    <>
      <div className={styles.playlist}>
        <div className={styles.imgContent}>
          <img src={playlist.picUrl} />
          <a href={`/playlist?${playlist.id}`} className={styles.msk}></a>
          <div className={styles.mask}>
            <span>
              <i style={{ marginRight: 3 }}>
                <CustomerServiceOutlined />
              </i>
              {getCount(playlist.playCount)}
            </span>
            <span>
              <PlayCircleOutlined />
            </span>
          </div>
        </div>
        <div className={styles.name}>
          <a>
            {playlist.name}
          </a>
        </div>
      </div>
    </>
  )
}
