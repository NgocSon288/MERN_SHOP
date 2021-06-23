import React, { useEffect, useContext,useState} from "react";
import './Product.css'
import { ProductContext } from "../../../contexts/client/ProductContext";
import {FaStar,FaRegStar} from "react-icons/fa"
import $ from 'jquery'
import { Link } from "react-router-dom";
export default function SameProduct() {
 const [sameProduct, setData] = useState({
	data:[],
  })
  const { products, dispatch } = useContext(ProductContext)
	
  useEffect(() => {
    var location = window.location.href
    const index = location.lastIndexOf('/') + 1
    const id = location.substring(index)
    if (products && products.length > 0) {
       for(var i=0;i<products.length;i++)
       {
           if(products[i]._id===id)
             products.splice(i,1)
       }
       const sameproduct=products.slice(0,4)
       console.log(sameproduct)
       setData({
           data: sameproduct
       })
       console.log(sameProduct.data)
    }
  }, [products])
  return(
    <div className="row">
        { sameProduct.data &&
            sameProduct.data.map((item, i) => (
            <div className="col-3">
                <div className="san-pham">
                    <div className="card p-2" style={{width: "100%"}}>
                      <a href="#" >
                            <div className="grid" style={{backgroundColor: "transparent"}}>
                                <figure className="effect-apollo" style={{backgroundColor: "transparent"}}>
                                    <img src={`http://localhost:3000/images/product/${item.image.split("|")[0]}`} alt="Sản phẩm thêm 1" className="w-100"/> 
                                </figure>
                            </div>
                     </a>
                            <h4 style={{minHeight: "20px", fontSize: "16px",textAlign: "center"}}>
                            <Link to={`/Product-Detail/${item._id}`}>
                                    <a className="ten xem-them" style={{cursor: "pointer",textDecoration:"none"}}>{item.name}</a>
                             </Link>
                            </h4>
                            <h5 style={{fontSize: "16px", textAlign:"center", color: "red"}}>3.790.000<span className="badge vnd text-white">₫</span></h5>
                            <h6 className="text-center"><a href="chitietsanpham.html" className="xem-them"  style={{textDecoration:"none"}}>Xem thêm</a></h6>
                    </div>
                    <div className="wrap"></div>
                </div>
            </div> 
            ))}
    </div>
  )
}