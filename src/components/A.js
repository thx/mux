import React from 'react'
import styles from './A.module.less'
import cx from 'classnames'

export default function A(props) {
  const { className, ...attrs } = props
  if (attrs.target === '_blank' && !attrs.rel) {
    attrs.rel = 'noopener noreferrer'
  }
  return props.href ? (
    <a className={className} {...attrs}>
      {props.children}
    </a>
  ) : (
    <span className={cx(styles.notAllowed, props.className)}>{props.children}</span>
  )
}
