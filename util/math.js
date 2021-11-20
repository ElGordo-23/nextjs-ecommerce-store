export function calcGrandTotal() {
  const cartArray = [];
  return cartArray.reduce((accumulator, car) => {
    return accumulator + car.price * car.amount;
  }, 0);
}
