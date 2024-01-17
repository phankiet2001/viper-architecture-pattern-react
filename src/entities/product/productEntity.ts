export class ProductEntity {
  private productList: string[] = [];

  addProduct(productName: string) {
    this.productList.push(productName);
    return productName;
  }

  getProduct() {
    return this.productList;
  }
}
