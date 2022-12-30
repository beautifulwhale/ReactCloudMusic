import React from 'react'
import Banners from './components/banners'
import HotRecommend from './components/hotRecommend'
import NewAlbum from './components/newAlbum'
import styles from './index.module.less'
function Recommend() {
  return (
    <>
      <Banners />
      <div className={styles.recommendContent}>
        <div className={styles.recommendLeft}>
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className={styles.recommendRight}>

        </div>
      </div>
    </>
  )
}
export default Recommend
