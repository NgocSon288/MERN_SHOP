import React, { createContext, useEffect } from "react";

import { brandReducer } from "../../reducers/client/brandReducer";
import useAsyncReducer from "../../reducers/useAsyncReducer"; //  dùng để gọi async function
import * as BRAND_TYPE from "./../../reducers/client/brandType";

export const BrandContext = createContext();

export default function BrandContextProvider({ children }) {
  const [brands, dispatch] = useAsyncReducer(brandReducer, []);

  useEffect(() => {
    dispatch({
      type: BRAND_TYPE.SET_BRANDS,
      payload: null,
    });
  }, []);

  const brandContextData = {
    brands,
    dispatch,
  };

  return (
    <BrandContext.Provider value={brandContextData}>
      {children}
    </BrandContext.Provider>
  );
}
