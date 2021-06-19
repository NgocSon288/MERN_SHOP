import React, { createContext, useEffect } from "react";

import { productDetailReducer } from "../../reducers//client/productDetailReducer";
import useAsyncReducer from "../../reducers/useAsyncReducer"; //  dùng để gọi async function
import * as PRODUCT_TYPE from "./../../reducers/client/productDetailType";

export const ProductDetailContext = createContext();

export default function ProductDetailContextProvider({ children }) {
  const [products, dispatch] = useAsyncReducer(productDetailReducer, []);

  useEffect(() => {
    dispatch({
      type: PRODUCT_TYPE.GET_PRODUCTS_BY_ID,
      payload: null,
    });
  }, []);

  const productContextData = {
    products,
    dispatch,
  };

  return (
    <ProductDetailContext.Provider value={productContextData}>
      {children}
    </ProductDetailContext.Provider>
  );
}
