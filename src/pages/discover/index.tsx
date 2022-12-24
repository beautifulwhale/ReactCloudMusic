import React from 'react'
import { Outlet } from 'react-router-dom';
import DiscoverStyle from './index.module.less';
export default function Discover() {
  return (
    <div>
      <h1>Discover</h1>
      <Outlet/>
    </div>
  )
}
