function getShippingCost(country) {
  let rate;
  switch (country) {
    case 'China':
      rate = 100;
      break;
    case 'Chile':
      rate = 250;
      break;
    case 'Australia':
      rate = 170;
      break;
    case 'Jamaica':
      rate = 120;
      break;
    default:
      return 'Sorry, there is no delivery to your country';
  }
  return `Shipping to ${country} will cost ${rate} credits`;
}

console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
