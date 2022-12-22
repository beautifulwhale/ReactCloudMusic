import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
// import './index.less'
import styles from './index.module.less'
export default function Menus() {
  let cx = classNames.bind(styles);
  const logoClass = cx({
    logo: true,
    'sprite_01': true
  })
  const menuItem: MenuProps['items'] = [
    {
      label: (
        <div className={styles['logoContainer']}>
          <a href="/" className={logoClass}>
            网易云音乐
          </a>
        </div>
      ),
      key: ''
    },
    {
      label: '发现音乐',
      key: 'discover'
    },
    {
      label: '我的音乐',
      key: 'mine'
    },
    {
      label: '关注',
      key: 'attention'
    },
    {
      label: '商城',
      key: 'shopping'
    },
    {
      label: '音乐人',
      key: 'musician'
    },
    {
      label: '下载客户端',
      key: 'download'
    }
  ]
  const [current, setCurrent] = useState('discover')
  const navigate = useNavigate()
  const handleClickMenu: MenuProps['onClick'] = (e) => {
    navigate(`/${e.key}`)
    setCurrent(e.key)
  }
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['discover']}
      selectedKeys={[current]}
      items={menuItem}
      onClick={handleClickMenu}
    />
  )
}
