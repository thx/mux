import React from 'react'
import cx from 'classnames'
import styles from './CreativeCard.module.less'
import Card from './Card'

export default function CreativeCard(props) {
  const link = `https://chuangyi.taobao.com/external/reports#/${props.id}`
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card className={cx(props.className, styles.creativeCard)}>
        <div className={styles.imageWrapper}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={styles.sub}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.desc}>{props.desc}</div>
        </div>
      </Card>
    </a>
  )
}
