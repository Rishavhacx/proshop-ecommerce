export function calcPrices(orderItems) {
  // Calculate the items price
  const itemsPrice = orderItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  
  // Calculate the shipping price
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  
  // Calculate the tax price
  const taxPrice = 0.15 * itemsPrice;
  
  // Calculate the total price
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  // Return prices as numbers with 2 decimal places
  return {
    itemsPrice: Number(itemsPrice.toFixed(2)),
    shippingPrice: Number(shippingPrice.toFixed(2)),
    taxPrice: Number(taxPrice.toFixed(2)),
    totalPrice: Number(totalPrice.toFixed(2)),
  };
}