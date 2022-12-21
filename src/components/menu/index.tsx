import { Menu, MenuProps } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Menus() {
  const menuItem: MenuProps['items'] = [
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
  ];
  const [current, setCurrent] = useState('discover');
  const navigate = useNavigate();
  const handleClickMenu: MenuProps['onClick'] = (e) => {
    navigate(`/${e.key}`);
    setCurrent(e.key);
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
