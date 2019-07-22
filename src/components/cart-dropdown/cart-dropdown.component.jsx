import React from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { connect } from 'react-redux';

const CartDropDown = ({ cartItems }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'/>
		{
			cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
		}
		<CustomButton className='custom-button inverted'>GO TO CHECKOUT</CustomButton>
	</div>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown);