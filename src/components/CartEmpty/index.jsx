import React from 'react'

import styles from './CartEmpty.module.scss'

const CartEmpty = () => {
  return (
    <div className={styles.root}>
        <h1>Корзина пустая 😕</h1>
        <p>Закажите что-нибудь и порадуйте себя!</p>
        <button className={styles.btn}>Вернуться назад</button>
    </div>
  )
}

export default CartEmpty;