import React, { useEffect } from 'react'
import styles from './Join.module.less'
import { JobList } from '../data/jobList'

export default function Join() {
  useEffect(() => {
    window.scrollTo({
      behavior: 'auto',
      top: 0,
    })
  }, [])
  return (
    <div className={styles.join}>
      <Cover />
      <Hire />
    </div>
  )
}

function Cover() {
  return (
    <div className={styles.cover}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <h1 className={styles.text}>
            阿里妈妈营销研究和
            <br />
            用户体验中心
          </h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.desc}>
          <div className={styles.quoteStart}>“</div>
          <div className={styles.text}>
            阿里妈妈MUX是负责阿里巴巴集团商业产品的营销研究及用户体验设计、前端开发团队。我们的愿景是以商业洞察、用户体验赋能商家，为其提供高效、人性化、智能化、跨平台的用户体验，让商家营销过程快速简单、效果优质显著。
          </div>
          <div className={styles.quoteEnd}>”</div>
        </div>
      </div>
    </div>
  )
}

function Hire() {
  function A(props) {
    if (props.link.indexOf('mailto:') === 0) {
      return <a href={props.link} className={props.className}>{props.children}</a>
    } else {
      return (
        <a href={props.link} className={props.className} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      )
    }
  }
  return (
    <div className={styles.hire}>
      {JobList.map(cat => (
        <div className={styles.cat} key={cat.title}>
          <div className={styles.catTitle}>{cat.title}</div>
          {cat.list.map(job => (
            <div className={styles.job} key={job.jobTitle}>
              <div className={styles.jobTitle}>{job.jobTitle}</div>
              <div className={styles.desc} dangerouslySetInnerHTML={{ __html: job.desc }}></div>
              <A
                link={job.applyLink}
                className={styles.btn}
              >
                投递简历
              </A>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
