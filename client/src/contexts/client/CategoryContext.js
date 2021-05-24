import React, { createContext, useEffect } from "react";

import { categoryReducer } from "../../reducers/client/categoryReducer";
import useAsyncReducer from "../../reducers/useAsyncReducer"; //  dùng để gọi async function
import * as CATEGORY_TYPE from "./../../reducers/client/categoryType";

export const CategoryContext = createContext();

export default function CategoryContextProvider({ children }) {
  const [categories, dispatch] = useAsyncReducer(categoryReducer, []);

  useEffect(() => {
    dispatch({
      type: CATEGORY_TYPE.SET_CATEGORIES,
      payload: null,
    });
  }, []);

  const categoryContextData = {
    categories,
    dispatch,
  };

  return (
    <CategoryContext.Provider value={categoryContextData}>
      {children}
    </CategoryContext.Provider>
  );
}
