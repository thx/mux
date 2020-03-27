import React, { useEffect, useState, useContext } from 'react'
import styles from './Index.module.less'
import { Link } from 'react-router-dom'

import { AppContext } from '../AppContext'

import ProductCard from '../components/ProductCard'
import CreativeCard from '../components/CreativeCard'
import Clock from '../components/Clock'

import { GalleryList } from '../data/galleryList'

export default function Index() {
  return (
    <div className={styles.index}>
      <Cover />
      <Gallery />
      <CreativeLab />
      <About />
    </div>
  )
}

function Cover() {
  return (
    <div className={styles.cover}>
      <div className={styles.title}>
        Marketing Research &amp; <br />
        User Experience
      </div>
      <div className={styles.subtitle}>营销研究和用户体验中心</div>
      <Clock className={styles.clock}/>
    </div>
  )
}

function Title(props) {
  return (
    <div className={styles.title}>
      <span className={styles.text}>{props.children}</span>
      <div className={styles.line}></div>
    </div>
  )
}

function Gallery() {
  const appContext = useContext(AppContext)
  // alert('gallery:' + appContext.netEnv)
  return (
    <div className={styles.gallery}>
      <div className={styles.inner}>
        {GalleryList.map((e, index) => (
          <div key={index}>
            <Title>{e.title}</Title>
            <div className={styles.productList}>
              {e.list
                // 外网只能看到外网的产品，内网能看到所有的产品
                .filter(
                  p =>
                    appContext.netEnv === 'inner' ||
                    (appContext.netEnv === 'outter' &&
                      (p.netEnv === 'outter' || p.netEnv === 'sooner')),
                )
                .map((p, index) => (
                  <ProductCard
                    className={styles.productCard}
                    key={index}
                    title={p.title}
                    desc={p.desc}
                    img={p.img}
                    link={p.link}
                    netEnv={p.netEnv}
                  ></ProductCard>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CreativeLab() {
  const [creativeLabList, setCreativeLabList] = useState([])
  useEffect(() => {
    const fetchRpt = async () => {
      const response = await fetch('https://fether.m.taobao.com/mux/reports')
      const res = await response.json()
      const arr = res?.result?.data?.result || []
      setCreativeLabList(arr.slice(0, 3))
    }
    fetchRpt()
  }, [])
  return (
    <>
      {creativeLabList.length ? (
        <div className={styles.creativeLab}>
          <div className={styles.inner}>
            <Title>创意研究所</Title>
            <div className={styles.creativeList}>
              {creativeLabList.map(e => (
                <CreativeCard
                  className={styles.creativeCard}
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  desc={e.reportDesc}
                  img={e.coverImage}
                ></CreativeCard>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

function About() {
  const jobList = [
    {
      img: 'https://img.alicdn.com/tfs/TB1qUnOvHY1gK0jSZTEXXXDQVXa-404-404.png',
      title: '设计',
    },
    {
      img: 'https://img.alicdn.com/tfs/TB11K2XvF67gK0jSZPfXXahhFXa-404-404.png',
      title: '前端技术',
    },
    {
      img: 'https://img.alicdn.com/tfs/TB1ygbKvFP7gK0jSZFjXXc5aXXa-404-404.png',
      title: '行业趋势及用户研究',
    },
  ]
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <div className={styles.text}>关于我们</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.desc}>
        阿里妈妈MUX是负责阿里巴巴集团商业产品的营销研究及用户体验设计、前端开发团队。
        <br />
        我们的愿景是以商业洞察、用户体验赋能商家，为其提供高效、人性化、智能化、跨平台的用户体验，
        <br />
        让商家营销过程快速简单、效果优质显著。
      </div>
      <div className={styles.jobList}>
        {jobList.map((e, index) => (
          <div className={styles.item} key={index}>
            <img src={e.img} alt="" />
            <div className={styles.title}>{e.title}</div>
          </div>
        ))}
      </div>
      <div className={styles.join}>
        <div className={styles.text}>我们需要志同道合的有温度的你</div>
        <Link to="/join" className={styles.btn}>
          加入我们
        </Link>
      </div>
    </div>
  )
}
