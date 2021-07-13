import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import Pagination from "react-js-pagination";
import "./Profile.css";
export default function ListProduct({ products, onAddToCart }) {
  // Params pagination
  let [activePage, setActivePage] = useState(1);
  let [totalItemsCount, setTotalItemsCount] = useState(1);
  let [productsActivePage, setProductsActivePage] = useState([]);
  let itemsCountPerPage = 3;

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
  if (productsActivePage)
    return (
      <div>
        {productsActivePage &&
          productsActivePage.map((rows) => (
            <div class="row">
              <div>
                <div class="wrapper">
                  <div class="px-sm-4 px-3 py-sm-5 py-3 mt-4 mb-0">
                    <div class="row">
                      {rows &&
                        rows.map(
                          (item, i) =>
                            item && (
                              <div class="col-md-4 col-6 div-img-hover">
                                <div>
                                  <div class="text-center wrap-img-sp">
                                    <img
                                      src={
                                        item &&
                                        item.image &&
                                        `http://localhost:3000/images/product/${
                                          item.image.split("|")[0]
                                        }`
                                      }
                                      class="img-hover"
                                      alt=""
                                    />
                                    <div class="xem-chi-tiet">
                                      <Link to={`/Product-Detail/${item._id}`}>
                                        Xem chi tiết
                                      </Link>
                                    </div>
                                    <span class="product-new-top">
                                      Trả góp 0%
                                    </span>
                                  </div>
                                  <div class="text-center mt-2">
                                    <h4 class="pt-1 ten-san-pham">
                                      <Link to={`/Product-Detail/${item._id}`}>
                                        {item.name}
                                      </Link>
                                    </h4>
                                    <div class="mt-2 text-center mb-0">
                                      <p class="text-center mx-auto text-danger mb-0">
                                        38.990.000
                                        <span
                                          class="VND badge badge-danger"
                                          style={{
                                            verticalAlign: "top",
                                            fontSize: "10px",
                                          }}
                                        >
                                          đ
                                        </span>
                                      </p>
                                      <del class="text-center">
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
                                      </del>
                                    </div>
                                    <button
                                      class="btn-them"
                                      onClick={() => onAddToCart(item)}
                                    >
                                      Thêm vào giỏ
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="my-pagination">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
          />
        </div>
      </div>
    );
}
