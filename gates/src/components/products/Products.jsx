import axios from "axios";
import ProductCard from '../../components/card/Card';
import { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .then(() => console.log(products))
  }, []);

  return (
    <div className="products-div">
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} className="product-card"/>
        ))}
      </ul>
    </div>
  );
}

export default Products;
