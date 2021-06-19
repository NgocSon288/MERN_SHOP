import React, { useEffect } from "react";

import ProductDetail from "../../../components/product/client/ProductDetail";
import ListCommentClient from "../../../components/comment/client/ListComment"
import CreateCommentClient from "../../../components/comment/client/CreateComment"
import { Row, Col } from "reactstrap";
import Create from "../admin/Create";

export default function Detail({ title }) {
  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
    <ProductDetail/>
    <div className="container py-xl-4 py-lg-2">	
      <div class="danh-gia w-100" style={{backgroundColor:" #eee"}}> 
    <ListCommentClient/>
    <CreateCommentClient/>
      </div>
    </div>
    </div>
  );
}
