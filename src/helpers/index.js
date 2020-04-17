export const wasAdded = (cart, itemId) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === itemId) return true;
  }
  return false;
};
