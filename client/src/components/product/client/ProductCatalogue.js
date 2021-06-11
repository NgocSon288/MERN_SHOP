import React, { useEffect, useContext } from "react";
import { Row } from "reactstrap";

import { ProductContext } from "../../../contexts/client/ProductContext";
import { ProductSessionContext } from "../../../contexts/client/ProductSessionContext";
import * as PRODUCT_SESSION_TYPE from "./../../../reducers/client/productSessionType";

import { LOCAL_STORAGE_CART } from "../../../common/constants";

import "./ProductCatalogue.css";

export default function ProductCatalogue() {
  const { products, dispatch } = useContext(ProductContext);
  const { productSessions, dispatch: dispatchProductSession } = useContext(
    ProductSessionContext
  );

  useEffect(() => {}, [products, productSessions]);

  const onAddToCart = async (product) => {
    try {
      dispatchProductSession({
        type: PRODUCT_SESSION_TYPE.ADD_TO_CART,
        payload: { product: product },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const test = async () => {
    try {
      dispatchProductSession({
        type: PRODUCT_SESSION_TYPE.SET_PRODUCT_SESSIONS,
        payload: null,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div class="wrapper">
      <Row xs="1" sm="2" md="4">
        {products &&
          products.map((item) => (
            <div class="div-img-hover">
              <div>
                <div class="text-center wrap-img-sp">
                  <img
                    src={
                      `http://localhost:3000/images/product/${
                        item.image.split("|")[0]
                      }` ||
                      "https://tse3.mm.bing.net/th?id=OIP.03Nx1O7saqRog5kMdOZSuwHaHa&pid=Api&P=0&w=300&h=300"
                    }
                    class="img-hover"
                    alt=""
                  />
                  <div class="xem-chi-tiet">
                    <a href="#">Xem chi tiết</a>
                  </div>
                  <span class="product-new-top">Trả góp 0%</span>
                </div>
                <div class="text-center mt-2">
                  <h4 class="pt-1 ten-san-pham">
                    <a href="single.html">{item.name}</a>
                  </h4>
                  <div class="mt-2 text-center mb-0">
                    <p class="text-center mx-auto text-danger mb-0">
                      {item.price}
                      <span
                        class="VND badge badge-danger"
                        style={{ verticalAlign: "top", fontSize: "10px" }}
                      >
                        đ
                      </span>
                    </p>
                    {/* <del class="text-center">
                      40.990.000{" "}
                      <span
                        class="VND badge badge-default"
                        style={{
                          verticalAlign: "top",
                          fontSize: "10px",
                          backgroundColor: "gray",
                        }}
                      >
                        đ
                      </span>
                    </del> */}
                  </div>
                  <button class="btn-them" onClick={() => onAddToCart(item)}>
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
      </Row>
      <button onClick={() => test()}>test</button>
    </div>
  );
}
