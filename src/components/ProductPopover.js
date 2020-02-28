import React from 'react'
import cx from 'classnames'
import styles from './ProductPopover.module.less'
import { GalleryList } from '../data/galleryList'

export default function ProductPopover(props) {
  return (
    <div className={styles.productPopover}>
      {GalleryList.map(group => (
        <div className={styles.group} key={group.title}>
          <div className={styles.title}>
            <span>{group.title}</span>
          </div>
          <div className={styles.productList}>
            {group.list.map(product => (
              <a
                href={product.link}
                className={styles.product}
                key={product.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
