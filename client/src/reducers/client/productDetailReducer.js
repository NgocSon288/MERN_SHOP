import productService from "../../services/productService";
import * as TYPE from "./productDetailType";

export const productDetailReducer = async (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.GET_PRODUCTS_BY_ID: {
      const res = await productService.getById();
      state = res.data;

      return state;
    }

    default:
      return state;
  }
};