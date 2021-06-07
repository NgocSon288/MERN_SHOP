import React, { useEffect } from "react";

import ProductCatalogue from "../../../components/product/client/ProductCatalogue";
import FilterMenu from "../../../components/category/client/FilterMenu";

import { Row, Col } from "reactstrap";

export default function Catalogue({ title }) {
  useEffect(() => {
    document.title = title;
  });

  return (
    <div style={{ marginLeft: "10%", marginRight: "10%", paddingTop: "22px" }}>
      <Row>
        <Col lg="3">
          <FilterMenu />
        </Col>
        <Col lg="9">
          <ProductCatalogue />
        </Col>
      </Row>
    </div>
  );
}
