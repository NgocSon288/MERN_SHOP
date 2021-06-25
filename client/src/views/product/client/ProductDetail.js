import React, { useEffect } from "react";

import ProductDetail from "../../../components/product/client/ProductDetail";
import ListCommentClient from "../../../components/comment/client/ListComment"
import CreateCommentClient from "../../../components/comment/client/CreateComment"
import SameProductClient from "../../../components/product/client/SameProduct"
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
     <h2 id="danh-gia-kh" style={{marginTop: "10px", marginBottom: "20px", fontSize: "30px"}}>
       KHÁCH HÀNG ĐÁNH GIÁ
      </h2>
      <div class="danh-gia w-100" style={{backgroundColor:" #eee"}}> 
    <ListCommentClient/>
    <CreateCommentClient/>
      </div>
      <h2 id="danh-gia-kh" class="head-title-product">
				CÁC SẢN PHẨM NỔI BẬT KHÁC
			</h2>
    <SameProductClient/>
    </div>
    </div>
  );
}
