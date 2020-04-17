import React, { useContext } from 'react'
import styles from './Footer.module.less'
import { AppContext } from '../AppContext'

const friendLinks = [
  {
    name: 'Alibaba Design',
    link: 'http://www.alibabaued.com/',
    netEnv: 'outter',
  },
  {
    name: 'Alipay Design',
    link: 'https://design.alipay.com/',
    netEnv: 'outter',
  },
  {
    name: 'Alibaba.com设计平台',
    link: 'https://alibaba.fusion.design/',
    netEnv: 'outter',
  },
  {
    name: 'Iconfont',
    link: 'https://www.iconfont.cn/',
    netEnv: 'outter',
  },
  {
    name: '优设网',
    link: 'https://www.uisdc.com/',
    netEnv: 'outter',
  },
  {
    name: 'UI中国',
    link: 'https://www.ui.cn/',
    netEnv: 'outter',
  },
  {
    name: 'Bootstrap',
    link: 'https://www.bootcss.com/',
    netEnv: 'outter',
  },
  {
    name: '淘系前端团队FED',
    link: 'https://fed.taobao.org/',
    netEnv: 'outter',
  },
  {
    name: '阿里妈妈创意中心',
    link: 'https://chuangyi.taobao.com/',
    netEnv: 'outter',
  },
  {
    name: '阿里巴巴前端委员会',
    link: 'https://f2e.alibaba-inc.com/',
    netEnv: 'inner',
  },
  {
    name: '素材中心',
    link: 'https://sucai.alibaba-inc.com/',
    netEnv: 'inner',
  },
  {
    name: 'THX',
    link: 'https://thx.github.io/',
    netEnv: 'outter',
  },
  {
    name: '优设教程网',
    link: 'https://uiiiuiii.com/',
    netEnv: 'outter'
  }
]

export default function Footer() {
  const appContext = useContext(AppContext)
  const links = friendLinks.filter(
    p => appContext.netEnv === 'inner' || appContext.netEnv === p.netEnv,
  )

  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        {links.map(e => (
          <a key={e.link} href={e.link} target="_blank" rel="noopener noreferrer">
            {e.name}
          </a>
        ))}
      </div>
      <div className={styles.text}>
        <span className={styles.copyright}>© 2007-2020 阿里妈妈.版权所有</span>
        <span>
          增值电信业务经营许可证：
          <a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
            浙B2-20070195
          </a>
        </span>
      </div>
      <div className={styles.text}>
        <a
          href="http://idinfo.zjamr.zj.gov.cn/bscx.do?method=lzxx&id=3301843301080000022791"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.icon}
            src="https://img.alicdn.com/tfs/TB1NXSXy7L0gK0jSZFxXXXWHVXa-38-38.png"
            alt=""
          />
        </a>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010002000075"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.icon}
            src="https://img.alicdn.com/tfs/TB1VdWcyYj1gK0jSZFuXXcrHpXa-36-40.png"
            alt=""
          />
          <span>浙公网安备 33010002000075号</span>
        </a>
      </div>
    </div>
  )
}
