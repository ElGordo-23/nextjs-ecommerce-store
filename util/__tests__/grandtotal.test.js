import { calcGrandTotal } from '../math';

const props = [{ id: 1, price: 2, amount: 3 }];

test('multipy ammount with quantity', () => {
  expect(calcGrandTotal(props).toBe(6));
});
