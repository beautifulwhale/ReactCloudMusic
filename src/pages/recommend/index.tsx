import React, { useEffect } from 'react'
import bannerList from '../../services/banner'
export default function Recommend() {
  useEffect(() => {
    const res = bannerList()
    console.log('res', res);
  }, [])
  return (
    <div>Recommend</div>
  )
}
