import React, { createContext, useEffect } from "react";

import { seenProductReducer } from "../../reducers/client/seenProductReducer";
import useAsyncReducer from "../../reducers/useAsyncReducer"; //  dùng để gọi async function
import * as SEEN_PRODUCTS_TYPE from "./../../reducers/client/seenProductType";

export const SeenProductContext = createContext();

export default function SeenProductContextProvider({ children }) {
  const [seenProducts, dispatch] = useAsyncReducer(
    seenProductReducer,
    []
  );

  useEffect(() => {
    //console.log("into");
    dispatch({
      type: SEEN_PRODUCTS_TYPE.SET_SEEN_SESSIONS,
      payload: null,
    });
  }, []);

  const seenProductContextData = {
    seenProducts,
    dispatch,
  };

  return (
    <SeenProductContext.Provider value={seenProductContextData}>
      {children}
    </SeenProductContext.Provider>
  );
}