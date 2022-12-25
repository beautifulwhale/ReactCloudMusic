import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './discoverMenu.module.less'

export default function DiscoverMenu() {
  const discoverMenuList = [
    {
      label: '推荐',
      link: ''
    },
    {
      label: '排行榜',
      link: '/discover/toplist'
    },
    {
      label: '歌单',
      link: '/discover/playlist'
    },
    {
      label: '主播电台',
      link: '/discover/djradio'
    },
    {
      label: '歌手',
      link: '/discover/artist'
    },
    {
      label: '新碟上架',
      link: '/discover/album'
    },
  ]
  const [currentMenu, setMenu] = useState('')
  const navigate = useNavigate()
  const handleMenuLink = (link: string) => {
    setMenu(link)
    navigate(`${link}`)
  }
  return (
    <>
      <div className={styles.discoverMenu}>
        <div className={styles.nav}>
          <ul>
            {
              discoverMenuList.map(item => {
                return (
                  <li  key={item.link}>
                    <span className={currentMenu === item.link ? styles.active : ''} onClick={() => handleMenuLink(item.link)}>{item.label}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}
