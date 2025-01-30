import React from 'react'

const Cart = () => {
  return (
    <>
        <div className="cart border-white" style={{marginLeft: '15px', display: 'flex', gap: '5px', alignItems: 'end'}}>
            <img src="/Images/307-3071593_accessories-shopping-cart-icon-white.png"  width={25} alt="" />
            <span>
                <h1 style={{
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '-5px'
                }}
                >Cart</h1>
            </span>
        </div>
    </>
  )
}

export default Cart