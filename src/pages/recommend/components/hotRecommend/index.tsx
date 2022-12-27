import React from 'react'
import HeaderTitle from '../../../../components/header-title'

export default function HotRecommend() {
  const menus = [
    {
      label: '华语',
      id: '1'
    },
    {
      label: '流行',
      id: '2'
    },
    {
      label: '摇滚',
      id: '3'
    },
    {
      label: '民谣',
      id: '4'
    },
    {
      label: '电子',
      id: '5'
    }
  ]
  return (
    <>
      <HeaderTitle title="热门推荐" menus={menus} />
    </>
  )
}
