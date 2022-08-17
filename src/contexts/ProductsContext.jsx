import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebaseUtils";
import productData from "../productData.json";
import data from "../data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // write data to db on mount
    addCollectionAndDocuments("categories", data);
  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
