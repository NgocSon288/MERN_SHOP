import brandService from "../../services/brandService";
import * as TYPE from "./brandType";

export const brandReducer = async (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.SET_BRANDS: { 

      const res = await brandService.getAll();
      state = res.data;

      return state;
    }

    default:
      return state;
  }
};
