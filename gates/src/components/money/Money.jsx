import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import './Money.css';

function Money() {

  const { money} = useContext(ProductContext); 


  return (
    <div id='money'>
        <p>{money}$</p>
    </div>
  )
}

export default Money