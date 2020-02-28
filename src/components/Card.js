import React from 'react'
import styles from './Card.module.less'
import cx from 'classnames'

export default function Card(props) {
  return <div className={cx(styles.card, props.className)}>{props.children}</div>
}
