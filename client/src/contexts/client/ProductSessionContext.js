import React, { createContext, useEffect } from "react";

import { productSessionReducer } from "../../reducers/client/productSessionReducer";
import useAsyncReducer from "../../reducers/useAsyncReducer"; //  dùng để gọi async function
import * as PRODUCT_SESSION_TYPE from "./../../reducers/client/productSessionType";

export const ProductSessionContext = createContext();

export default function ProductSessionContextProvider({ children }) {
  const [productSessions, dispatch] = useAsyncReducer(
    productSessionReducer,
    []
  );

  useEffect(() => {
    //console.log("into");
    dispatch({
      type: PRODUCT_SESSION_TYPE.SET_PRODUCT_SESSIONS,
      payload: null,
    });
  }, []);

  const productSessionContextData = {
    productSessions,
    dispatch,
  };

  return (
    <ProductSessionContext.Provider value={productSessionContextData}>
      {children}
    </ProductSessionContext.Provider>
  );
}
