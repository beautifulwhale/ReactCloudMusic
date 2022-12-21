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
        }
    ];
    const [current, setCurrent] = useState('discover');
    const navigate = useNavigate();
    const handleClickMenu:MenuProps['onClick'] = (e) => {
        console.log('key==>',e);
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
