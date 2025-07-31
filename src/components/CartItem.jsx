import React from 'react'
import { useSelector } from 'react-redux';



const CartItem = ({id, title, price, imageUrl, type, size}) => {


  const [btnItem, setBtnItem] = React.useState(0);
  const btnCheck = () => {
    if (btnItem > 0) {
      setBtnItem(btnItem - 1)
    }
    }


  return (
    <div>
        <div className="cart--item">
            <div className="cart--img">
                    <img width={100} height={100} src={imageUrl} alt="" />
            </div>
            <div className="cart--item--info">
                    <h3>{title}</h3>
                    <p>{type}, 26 см.</p>
            </div>
            <div className="cart--item--count">
                <div onClick={() => btnCheck()} className="cart--item--btn--minus"><img width={40} height={40} src="images/minus.svg" alt="" /></div>
                <b>{btnItem}</b>
                <div onClick={() => setBtnItem(btnItem + 1)}  className="cart--item--btn--plus"><img width={40} height={40} src="images/plus.svg" alt="" /></div>
            </div>
            <div className="cart--item--price"><b>{price} руб.</b></div>
            <div className="cart--item--remove"><img src="" alt="" /><img width={25} height={25} src="images/remove.svg" alt="" /></div>
         </div>
    </div>
  )
}

export default CartItem;