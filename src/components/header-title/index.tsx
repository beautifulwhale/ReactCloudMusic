import React from 'react'
import classNames from 'classnames/bind'
import { HeaderMenus } from '../../model/header-title'
import styles from './index.module.less'
type FCProps = {
  title: string
  menus?: HeaderMenus[]
}
export default function HeaderTitle(props: FCProps) {
  const { title, menus = [] } = props
  const cx = classNames.bind(styles)
  const headerTitleClass = cx({
    'header-title': true,
    sprite_02: true
  })
  const moreClass = cx({
    more: true,
    sprite_02: true
  })
  const moreLogoClass = cx({
    'more-logo': true,
    sprite_02: true
  })
  return (
    <>
      <div className={headerTitleClass}>
        <div className={styles.left}>
          <div className={styles.title}>{title}</div>
          <div className={styles.tab}>
            {menus.map((item, index) => {
              return (
                <div key={item.id}>
                  <a href="menu">{item.label}</a>
                  {index !== menus.length - 1 ? (
                    <span className={styles.line}>|</span>
                  ) : (
                    ''
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className={moreClass}>
          <a href="more">更多</a>
          <i className={moreLogoClass}></i>
        </div>
      </div>
    </>
  )
}
