// Add item to cart function (includes multiple items)
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Checks to see if the same items exists in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // Update that same item and increase quantity by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If the same item does not exist in the cart, then add a new item with a quantity of 1 in the state
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
