import React from 'react'
import cx from 'classnames'
import styles from './ProductCard.module.less'
import Card from './Card'
import { ReactComponent as RightArrow } from '../image/right.svg'

export default function ProductCard(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Card className={cx(props.className, styles.productCard)}>
        <div className={styles.imageWrapper}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={styles.sub}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.desc}>{props.desc}</div>
          <div className={styles.link}>
            <span className={styles.text}>立即体验</span> <RightArrow />
          </div>
        </div>
      </Card>
    </a>
  )
}
