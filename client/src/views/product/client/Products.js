import React, { useEffect, useContext, useState } from "react";

import ProductCatalogue from "../../../components/product/client/ProductCatalogue";
import FilterMenu from "../../../components/category/client/FilterMenu";

import { ProductContext } from "../../../contexts/client/ProductContext";

import { Row, Col } from "reactstrap";

export default function Catalogue({ title }) {
  let { products, dispatch } = useContext(ProductContext);
  let [productABC, setProductABC] = useState([]);
  let [productAfterQuery, setProductAfterQuery] = useState([]);

  useEffect(() => {
    document.title = title;

    var location = window.location.href;
    const index = location.lastIndexOf("?") + 1;
    var queryString = location.substring(index);

    if (products) {
      setProductABC([...products]);
      setProductAfterQuery([...products]);
    }

    if (index != 0) {
      const seperator = queryString.lastIndexOf("=") + 1;
      var queryMethod = queryString.substring(0, seperator - 1);
      var keyword = queryString.substring(seperator);

      //console.log(queryMethod);
      //console.log(keyword);
      if (queryMethod == "keyword") {
        products = products.filter((e) =>
          e.name.toLowerCase().includes(keyword)
        );
        setProductABC([...products]);
        setProductAfterQuery([...products]);
      } else if (queryMethod == "categories") {
      }
    }
  }, [products]);

  // useEffect(() => {
  //   document.title = title;
  //   if (products) {
  //     setProductABC([...products]);
  //   }
  // }, [products]);

  const filter = async (a) => {
    setProductABC([...a]);
  };

  //console.log("product: ", productABC);

  return (
    <div style={{ marginLeft: "10%", marginRight: "10%", paddingTop: "22px" }}>
      <Row>
        <Col lg="3">
          <FilterMenu filter={filter} products={productAfterQuery} />
        </Col>
        <Col lg="9">
          <ProductCatalogue products={productABC} />
        </Col>
      </Row>
    </div>
  );
}
