function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));

// // Short version - arrow function returning automatically the result without "return" (i.e. const functionName = (...parameters) => ):

// const getShippingMessage = (country, price, deliveryFee) =>
//   `Shipping to ${country} will cost ${price + deliveryFee} credits`;

// console.log(getShippingMessage('Australia', 120, 50));
// console.log(getShippingMessage('Germany', 80, 20));
// console.log(getShippingMessage('Sweden', 100, 20));
