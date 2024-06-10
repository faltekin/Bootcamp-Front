import React, { useContext } from "react";

import "./PurchasedProducts.css";
import { ProductContext } from "../context/ProductContext";

function PurchasedProducts() {
  const { purchasedProducts } = useContext(ProductContext);

  return (
    <div className="purchased-products">
      <h2>Satın Alınan Ürünler</h2>
      <ul>
        {purchasedProducts.map(product => (
          <li key={product.id}>
            {product.title} - {product.quantity} adet - Toplam: {product.quantity * product.price}$
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PurchasedProducts;
