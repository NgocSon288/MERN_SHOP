import productService from "../../services/productService";
import * as TYPE from "./productType";

export const productReducer = async (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.SET_PRODUCTS: {
      const res = await productService.getAll();
      state = res.data;
      return state;
    }

    default:
      return state;
  }
};
