import React, { useEffect, useContext, useState } from "react";

import ProductCatalogue from "../../../components/product/client/ProductCatalogue";
import FilterMenu from "../../../components/category/client/FilterMenu";

import { ProductContext } from "../../../contexts/client/ProductContext";

import { Row, Col } from "reactstrap";

export default function Catalogue({ title }) {
  const { products, dispatch } = useContext(ProductContext);
  let [productABC, setProductABC] = useState([]);
  useEffect(() => {
    document.title = title;
    if (products) {
      setProductABC([...products]);
    }
  }, [products]);

  const filter = async (a) => {
    setProductABC([...a]);
  };

  console.log("product: ", productABC);

  return (
    <div style={{ marginLeft: "10%", marginRight: "10%", paddingTop: "22px" }}>
      <Row>
        <Col lg="3">
          <FilterMenu filter={filter} />
        </Col>
        <Col lg="9">
          <ProductCatalogue products={productABC} />
        </Col>
      </Row>
    </div>
  );
}
