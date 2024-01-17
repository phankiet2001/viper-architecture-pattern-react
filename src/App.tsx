import React, { ChangeEvent } from "react";
import { ProductListPresenter, productPresenter } from "./presenters";

import "./App.css";

function App() {
  const [products, setProducts] = React.useState<string[]>([]);
  const [value, setValue] = React.useState("");

  const productPresenterRef =
    React.useRef<ProductListPresenter>(productPresenter);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOnClickAddNewProduct = () => {
    productPresenterRef.current.addProduct(value);
    setProducts([...productPresenterRef.current.getProducts()]);
  };

  React.useEffect(() => {
    setProducts(productPresenterRef.current.getProducts());
  }, []);

  return (
    <div className="App">
      <input onChange={handleOnChange} />
      <button onClick={handleOnClickAddNewProduct}>Add</button>
      {products.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}

export default App;
