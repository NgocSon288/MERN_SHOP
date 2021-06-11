import productSessionService from "../../services/productSessionService";
import productService from "../../services/productService";
import * as TYPE from "./productSessionType";

import { LOCAL_STORAGE_CART } from "./../../common/constants";
import { element } from "prop-types";

export const productSessionReducer = async (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.SET_PRODUCT_SESSIONS: {
      var cartList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART));
      if (cartList == null) {
        cartList = [];
      }
      const res = await productService.getAll();
      var productsList = res.data;
      var productCartList = [];
      for (i = 0; i < cartList.length; i++) {
        var item = productsList.find((e) => e._id == cartList[i].id);
        var productCartListItem = { ...item, amount: cartList[i].amount };
        productCartList = [...productCartList, { ...productCartListItem }];
      }

      console.log(productCartList);

      state = productCartList;

      return state;
    }
    case TYPE.ADD_TO_CART: {
      const { product } = payload;

      //Storage
      var cartList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART));
      if (cartList == null) {
        cartList = [];
      }
      var check = 0;
      for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].id == product._id) {
          cartList[i].amount++;
          check = 1;
          break;
        }
      }
      if (check == 0) {
        const cartItem = { id: product._id, amount: 1 };
        cartList = [...cartList, { ...cartItem }];
      }

      localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(cartList));

      //State
      var checkstate = 0;
      for (var i = 0; i < state.length; i++) {
        if (state[i]._id == product._id) {
          state[i].amount++;
          check = 1;
          //console.log(state);
          return state;
        }
      }
      if (checkstate == 0) {
        const cartItemState = { ...product, amount: 1 };
        state = [...state, { ...cartItemState }];
        //console.log(state);
        return state;
      }
    }
    default: {
      //console.log("reducer");
    }
  }
};
