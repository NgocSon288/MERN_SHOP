import categoryService from "../../services/categoryService";
import * as TYPE from "./categoryType";

export const categoryReducer = async (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.SET_CATEGORIES: {
      const res = await categoryService.getAll();
      state = res.data;

      return state;
    }

    default:
      return state;
  }
};
