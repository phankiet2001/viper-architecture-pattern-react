import { ProductEntity } from "../../entities";

export class ProductInteractor {
  constructor(private productEntity: ProductEntity) {}

  addNewProduct(productName: string) {
    return this.productEntity.addProduct(productName);
  }

  getProduct() {
    return this.productEntity.getProduct();
  }
}
