import React from 'react'
import { Outlet } from 'react-router-dom';
import DiscoverStyle from './index.module.less';
import DiscoverMenu from './components/discoverMenu';
export default function Discover() {
  return (
    <div>
      <DiscoverMenu/>
      <Outlet/>
    </div>
  )
}
