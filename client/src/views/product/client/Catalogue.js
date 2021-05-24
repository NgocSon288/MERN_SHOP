import React, { useEffect } from "react";

import ProductCatalogue from "../../../components/product/client/ProductCatalogue";
import DropdownListCategory from "../../../components/category/client/DropdownListCategory";

import { Row, Col } from "reactstrap";

export default function Catalogue({ title }) {
  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <Row>
        <Col xs="3">
          <DropdownListCategory />
        </Col>
        <Col xs="9">
          <h2 className="mb-4">Danh sách các sản phẩm</h2>
          <ProductCatalogue />
        </Col>
      </Row>
    </div>
  );
}
