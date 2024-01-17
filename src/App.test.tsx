import { productPresenter } from './presenters';

test('add new product', () => {
  const products = ["123", "456", "789", "111", "222"];
  products.map(p => productPresenter.addProduct(p));
  expect(productPresenter.getProducts()).toEqual(products);
});
