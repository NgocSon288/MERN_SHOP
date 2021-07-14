import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import Pagination from "react-js-pagination";

import { ProductContext } from "../../../contexts/client/ProductContext";
import { ProductSessionContext } from "../../../contexts/client/ProductSessionContext";
import * as PRODUCT_SESSION_TYPE from "./../../../reducers/client/productSessionType";
import $ from "jquery";
import "./ProductCatalogue.css";

export default function ProductCatalogue({ products }) {
  // Params pagination
  let [activePage, setActivePage] = useState(1);
  let [totalItemsCount, setTotalItemsCount] = useState(1);
  let [productsActivePage, setProductsActivePage] = useState([]);
  let itemsCountPerPage = 8;

  //const { products, dispatch } = useContext(ProductContext);
  //products = products;
  const { productSessions, dispatch: dispatchProductSession } = useContext(
    ProductSessionContext
  );

  useEffect(() => {}, [productSessions]);

  const onAddToCart = async (product) => {
    try {
      dispatchProductSession({
        type: PRODUCT_SESSION_TYPE.ADD_TO_CART,
        payload: { product: product },
      });
      alert("Đã thêm vào giỏ hàng!");
      const amount = $("#amountOrder").text();
      $("#amountOrder").text(parseInt(amount) + 1);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (products) {
      setTotalItemsCount(products.length);
      let index = (activePage - 1) * itemsCountPerPage;
      setProductsActivePage([
        ...products.slice(index, index + itemsCountPerPage),
      ]);
    }
  }, [products]);

  // function pagination
  const handlePageChange = (pageNumber) => {
    let index = (pageNumber - 1) * itemsCountPerPage;
    setProductsActivePage([
      ...products.slice(index, index + itemsCountPerPage),
    ]);
    setActivePage(pageNumber);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  //console.log("products:", products);
  //console.log("productsActivePage:", productsActivePage);

  return (
    <div>
      <div class="wrapper">
        <Row xs="1" sm="2" md="4">
          {(!productsActivePage || productsActivePage.length <= 0) && (
            <div class="my-empty-cart">
              <img
                src="http://localhost:3000/images/product/no-product.png"
                alt="no-product"
              ></img>
            </div>
          )}
          {productsActivePage &&
            productsActivePage.map((item) => (
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
                      <a href={`/Product-Detail/${item._id}`}>Xem chi tiết</a>
                    </div>
                    <span class="product-new-top">Trả góp 0%</span>
                  </div>
                  <div class="text-center mt-2 text-container">
                    <h4 class="pt-1 ten-san-pham">
                      <a href={`/Product-Detail/${item._id}`}>{item.name}</a>
                    </h4>
                    <div class="mt-2 text-center mb-0">
                      <p class="text-center mx-auto text-danger mb-0">
                        {numberWithCommas(item.price)}
                        <span
                          class="VND badge badge-danger"
                          style={{ verticalAlign: "top", fontSize: "10px" }}
                        >
                          đ
                        </span>
                      </p>
                      <del class="text-center">
                        {numberWithCommas(item.promotion)}{" "}
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
                      </del>
                    </div>
                    <button class="btn-them" onClick={() => onAddToCart(item)}>
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </Row>
      </div>
      {productsActivePage && totalItemsCount > 8 && (
        <div className="my-pagination">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
