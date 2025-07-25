import React from 'react'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.root}>
        <h1>404</h1>
        <p>К сожалению, данная страница отсутствует.</p>
    </div>
  )
}

export default NotFound;