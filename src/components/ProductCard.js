import React, { useContext } from 'react'
import cx from 'classnames'
import styles from './ProductCard.module.less'
import Card from './Card'
import { ReactComponent as RightArrow } from '../image/right.svg'

import { AppContext } from '../AppContext'

function A(props) {
  return props.href ? (
    <a {...props}>{props.children}</a>
  ) : (
    <span className={styles.notAllowed}>{props.children}</span>
  )
}

export default function ProductCard(props) {
  const appContext = useContext(AppContext)
  const isSonner = appContext.netEnv === 'outter' && props.netEnv === 'sooner'
  return (
    <Card className={cx(props.className, styles.productCard)}>
      <A href={isSonner ? '' : props.link} target="_blank" rel="noopener noreferrer">
        <div className={styles.imageWrapper}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={styles.sub}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.desc}>{props.desc}</div>
          <div className={styles.link}>
            {isSonner ? (
              <span className={styles.text}>敬请期待</span>
            ) : (
              <>
                <span className={styles.text}>立即体验</span> <RightArrow />
              </>
            )}
          </div>
        </div>
      </A>
    </Card>
  )
}
