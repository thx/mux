import React, { useRef } from 'react'
import styles from './Header.module.less'
import { NavLink, Link } from 'react-router-dom'
import Trigger from 'rc-trigger'
import 'rc-trigger/assets/index.less'

import ProductPopover from './ProductPopover'

export default function Header() {
  const navRef = useRef(null)
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img
          className={styles.logoImg}
          src="https://img.alicdn.com/tfs/TB1m6TyvQL0gK0jSZFtXXXQCXXa-136-136.png"
          alt="阿里妈妈 MUX"
        />
        <span className={styles.logoText}>阿里妈妈营销研究和用户体验中心</span>
      </Link>
      <ul ref={navRef} className={styles.nav}>
        <li className={styles.navItem}>
          <NavLink to="/" exact className={styles.navLink} activeClassName={styles.active}>
            首页
          </NavLink>
        </li>

        <li className={styles.navItem}>
          <Trigger
            className={styles.navLink}
            action={['hover']}
            mouseEnterDelay={0.3}
            mouseLeaveDelay={0.3}
            popup={<ProductPopover />}
            popupAlign={{
              points: ['tl', 'bl'],
              offset: [0, 10],
            }}
            popupTransitionName="rc-trigger-popup-zoom"
          >
            <NavLink to="/">能力</NavLink>
          </Trigger>
        </li>
        <li className={styles.navItem}>
          <a
            href="https://chuangyi.taobao.com/external/reports"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            创意研究所
          </a>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/join" className={styles.navLink} activeClassName={styles.active}>
            加入我们
          </NavLink>
        </li>
      </ul>
    </header>
  )
}
