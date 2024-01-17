import { ProductEntity } from "../../entities";
import { ProductInteractor } from "../../interactors";

export class ProductListPresenter {
  constructor(private readonly productInteractor: ProductInteractor) {}

  addProduct(productName: string) {
    return this.productInteractor.addNewProduct(productName);
  }

  getProducts() {
    return this.productInteractor.getProduct();
  }
}

const productEntity = new ProductEntity();
const productInteractor = new ProductInteractor(productEntity);

export const productPresenter = new ProductListPresenter(productInteractor);
