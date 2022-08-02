import React from 'react';
import cart from './img/cart.png';
import cartPrototype from './img/cart-prototype.png';

class Cart extends React.Component {
  render() {
    return (
      <div className="shopping-cart" id="cart" onMouseEnter={this.MouseEnter} onMouseLeave={this.MouseLeave}>
        <div className="circle">0</div>
        <div className="circle-wrap light-wrap">
          <img src={cart} alt="Cart" id="cart-img" />
          <img src={cartPrototype} alt="Cart Prototype" id='cart-img-prototype' />
        </div>
        <div className='circle-wrap dark-wrap'>
          <img src={cartPrototype} alt="Cart Prototype" />
        </div>
      </div>
    );
  }
}

export default Cart;