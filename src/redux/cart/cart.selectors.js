import { createSelector } from "reselect"; // Memoized Selector

const selectCart = (state) => state.cart; // Get a slice of redux state

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatorTotal, cartItem) => accumulatorTotal + cartItem.quantity,
      0
    )
);
