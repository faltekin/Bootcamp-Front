import { createContext, useState  } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {

 const [money, setMoney] = useState(100000000000); 
 

 const [purchasedProducts, setPurchasedProducts] = useState([]); 

 const contextValue = {
   money,
   setMoney,
   purchasedProducts,
   setPurchasedProducts, 
 };


 return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );


};



