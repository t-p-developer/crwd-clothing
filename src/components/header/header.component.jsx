import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import './header.syles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo'/>
			</Link>
			<div className='options'>
				<Link className='option' to='shop'>SHOP</Link>
				<Link className='option' to='shop'>CONTACT</Link>
				{
					currentUser ?
						<div className='option' onClick={()=> auth.signOut()}>LOG OUT</div>
						:
						<Link className='option' to='/signin'>SIGN IN</Link>
				}
				<CartIcon/>
			</div>
			{hidden ?
				null :
				<CartDropDown />
			}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);