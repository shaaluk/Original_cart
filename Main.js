import React from "react";
import Product from "../component3/Product";
import "../index.css";

function Main(props) {
  const { products, setBasketData, basketData } = props;
  return (
    <div className="block col-2">

      <div className="newBlock">
        {products.map((product) => (
          // <div>{product.name}{product.content}{product.image}</div>
          <Product
            key={product?.id}
            product={product}
            basketData={basketData}
            setBasketData={setBasketData}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;