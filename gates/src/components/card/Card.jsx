import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ProductCard({ product }) {
  const { money, setMoney, purchasedProducts, setPurchasedProducts } = useContext(ProductContext);
  const [count, setCount] = useState(0);

  function handleSell() {
    setMoney(money + product.price * count);
  }

  function handleBuy() {
    if (money >= product.price * count) {
      setMoney(money - product.price * count);
      const existingProduct = purchasedProducts.find(p => p.id === product.id);
      if (existingProduct) {
        setPurchasedProducts(purchasedProducts.map(p => 
          p.id === product.id ? { ...p, quantity: p.quantity + count } : p
        ));
      } else {
        setPurchasedProducts([...purchasedProducts, { ...product, quantity: count }]);
      }
    } else {
      alert("Yeterli para yok!");
    }
  }

  function handleChange(event) {
    const value = Number(event.target.value);
    setCount(value);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={product.thumbnail} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <button className="sell" onClick={handleSell} disabled={count === 0}>
            Sell
        </button>
        <input value={count} type="number" onChange={handleChange} />
        <button className="buy" onClick={handleBuy} disabled={count === 0 || product.price * count > money}>
            Buy
        </button>
      </CardActions>
    </Card>
  );
}
