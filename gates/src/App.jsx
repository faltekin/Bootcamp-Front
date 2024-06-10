import './App.css'
import Profile from './components/profile/Profile';
import Money from './components/money/Money';
import Products from './components/products/Products';
import PurchasedProducts from './components/purchased/PurchasedProducts';
import { ProductProvider } from "./components/context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Profile />
      <Money />
      <Products />
      <PurchasedProducts /> 
    </ProductProvider>
  );
}

export default App;
