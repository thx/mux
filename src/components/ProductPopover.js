import React, { useContext } from 'react'
import styles from './ProductPopover.module.less'
import { GalleryList } from '../data/galleryList'
import A from './A'
import { ReactComponent as TagNew } from '../image/tag-new.svg'
import { AppContext } from '../AppContext'

export default function ProductPopover(props) {
  const appContext = useContext(AppContext)

  return (
    <div className={styles.productPopover}>
      {GalleryList.map(group => (
        <div className={styles.group} key={group.title}>
          <div className={styles.title}>
            <span>{group.title}</span>
          </div>
          <div className={styles.productList}>
            {group.list
              .filter(
                p =>
                  appContext.netEnv === 'inner' ||
                  (appContext.netEnv === 'outter' &&
                    (p.netEnv === 'outter' || p.netEnv === 'sooner')),
              )
              .map(product => (
                <A
                  href={
                    appContext.netEnv === 'outter' && product.netEnv === 'sooner'
                      ? ''
                      : product.link
                  }
                  className={styles.product}
                  key={product.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.title}
                  {product.isNew && <TagNew className={styles.tagNew}/>}
                </A>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
