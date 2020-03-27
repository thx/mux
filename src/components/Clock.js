import React, { useState, useEffect } from 'react'
import styles from './Clock.module.less'
import cx from 'classnames'

import { ReactComponent as Minute } from '../image/clock/minute.svg'
import { ReactComponent as Hour } from '../image/clock/hour.svg'
import { ReactComponent as Second } from '../image/clock/second.svg'

const useClock = (initialTime = new Date()) => {
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    const id = setInterval(() => {
      setTime(() => new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

export default function Clock(props) {
  const time = useClock()
  const hourDeg =
    ((time.getHours() % 12) + time.getMinutes() / 60 + time.getSeconds() / 3600) * 30 + 'deg'
  const minuteDeg = (time.getMinutes() + time.getSeconds() / 60) * 6 + 'deg'
  const secondDeg = time.getSeconds() * 6 + 'deg'
  return (
    <div className={cx(styles.clock, props.className)}>
      <Hour className={styles.hour} style={{
        transform: `rotate(${hourDeg})`
      }}/>
      <Minute className={styles.minute} style={{
        transform: `rotate(${minuteDeg})`
      }}/>
      <Second className={styles.second} style={{
        transform: `rotate(${secondDeg})`
      }}/>
      <div className={styles.dot}></div>
    </div>
  )
}
