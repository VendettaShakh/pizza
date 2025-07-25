import React from 'react'

const CartItem = () => {
  return (
    <div>
        <div className="cart--item">
            <div className="cart--img">
                    <img width={100} height={100} src="https://media.dodostatic.net/image/r:584x584/0197d0d4283575589ff0032eadd7cb68.avif" alt="" />
            </div>
            <div className="cart--item--info">
                    <h3>Сырный цыпленок</h3>
                    <p>тонкое тесто, 26 см.</p>
            </div>
            <div className="cart--item--count">
                <div className="cart--item--btn--minus"><img width={40} height={40} src="images/minus.svg" alt="" /></div>
                <b>2</b>
                <div className="cart--item--btn--plus"><img width={40} height={40} src="images/plus.svg" alt="" /></div>
            </div>
            <div className="cart--item--price"><b>770 руб.</b></div>
            <div className="cart--item--remove"><img src="" alt="" /><img width={25} height={25} src="images/remove.svg" alt="" /></div>
         </div>
    </div>
  )
}

export default CartItem;