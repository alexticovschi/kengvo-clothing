export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
        } : cartItem);
    }

    return [...cartItems, {
        ...cartItemToAdd,
        quantity: 1
    }];
};


export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    // if the existing quantity is equal to 1, remove the item
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    // otherwise decrease the quantity and keep the other items 
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ? 
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};