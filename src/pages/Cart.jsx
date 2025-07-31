import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setCartItems, setClearCart } from '../redux/cartSlice'

import styles from '../styles/components/cart.scss'
import CartItem from '../components/CartItem'

const Cart = () => {

    const dispatch = useDispatch ();

    const totalPrice = useSelector (state => state.cartSlice.totalPrice)
    const totalQty = useSelector (state => state.cartSlice.cartItems.length)
    const items = useSelector (state => state.cartSlice.cartItems)

  return (
    <div className='content'>
        <div className="container--cart">
            <div className="cart">
                <div className="cart--top">
                  <div className="content--title">
                    <img width={25} height={25} src="images/shopping-cart.svg" alt="" />
                    <h2>Корзина</h2>
                  </div>
                  <div className="cart--clear">
                    <img width={25} height={25} src="images/cart-cart.svg" alt="" />
                    <h3 onClick={() => dispatch(setClearCart())}>Очистить корзину</h3>
                  </div>
                </div>
                <div className="cart--items">
                   {items.map((item) => <CartItem {...item}/>)} 
                 </div>
                <div className="cart--footer">
                  <div className="cart--footer--info">
                    <div className="cart--footer--all">
                      <span>Всего пицц:</span>
                      <b>{totalQty} шт.</b>
                    </div>
                    <div className="cart--footer--price">
                      <span>Сумма заказа:</span>
                      <b>{totalPrice} руб.</b>
                   </div>
                  </div>
                  <div className="cart--footer--btn">
                    <div className="cart--footer--back--main">
                      <img width={15} height={15} src="images/arrow-left.svg" alt="" />
                      <button className="cart--footer--back">Вернуться назад</button>
                    </div>
                    <button className="cart-footer--pay">Оплатить сейчас</button>
                  </div>
              
                </div>
              </div>
            </div>
      </div>
  )
}

export default Cart;