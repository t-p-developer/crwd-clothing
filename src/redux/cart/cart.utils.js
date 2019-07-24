export const addItemToCart = (cartItems, cartItemToAdd) => {
	//this is overkill, we can actually return right away by checking id-s ???
	const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				?
				{ ...cartItem, quantity: cartItem.quantity + 1 }
				:
				{...cartItem}
		)
	}

	return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem =>cartItem.id !== cartItemToRemove.id)
	}

	if (existingCartItem.quantity !== 1) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToRemove.id ?
			{ ...cartItem, quantity: cartItem.quantity - 1 }
			:
			{ ...cartItem }
		)
	}

}