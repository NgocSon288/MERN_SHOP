import React, { useEffect } from "react";

import ProductCatalogue from "../../../components/product/client/ProductCatalogue";

export default function Catalogue({ title }) {
  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <div>
        <h2 className="mb-4">Danh sách các sản phẩm</h2>
        <ProductCatalogue />
      </div>
    </div>
  );
}
