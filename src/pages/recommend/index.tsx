import React, { useEffect } from 'react'
import bannerList from '../../services/banner'
export default function Recommend() {
  useEffect(() => {
    bannerList().then(
      res => {
        console.log('res', res);
      }
    )
  }, [])
  return (
    <div>Recommend</div>
  )
}
