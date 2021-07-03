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
       setData({
           data: sameproduct
       })
       console.log(sameProduct.data)
    }
  }, [products])
  const convertMoney = (char, money) => {
    money = money.toString()
    let arr = []
    let n = money.length
    let i = 1
    let j = 3

    while (i < n) {
      if (++i % 3 === 0) {
        j = i
        arr.unshift(money.slice(n - i, n - i + 3))
      }
    }

    arr.unshift(money.slice(0, n - j))

    return arr.join(char)
  }
  return(
    <div className="row">
        { sameProduct.data &&
            sameProduct.data.map((item, i) => (
            <div className="col-3">
                <div className="san-pham">
                    <div className="card p-2 kanata" style={{width: "100%"}}>
                      <a href={`/Product-Detail/${item._id}`} >
                            <div className="grid" style={{backgroundColor: "transparent"}}>
                                <figure className="effect-apollo" style={{backgroundColor: "transparent"}}>
                                    <img src={`http://localhost:3000/images/product/${item.image.split("|")[0]}`} alt="Sản phẩm thêm 1" className="w-100"/> 
                                </figure>
                            </div>
                     </a>
                            <h4 style={{minHeight: "20px", fontSize: "16px",textAlign: "center"}}>
                            <a href={`/Product-Detail/${item._id}`}>
                                    <a className="ten xem-them" style={{cursor: "pointer",textDecoration:"none"}}>{item.name}</a>
                             </a>
                            </h4>
                            <h5 style={{fontSize: "16px", textAlign:"center", color: "red"}}>{`${convertMoney('.', item.price)}`}<span className="badge vnd text-white">₫</span></h5>
                            <h6 className="text-center"><a href={`/Product-Detail/${item._id}`} className="xem-them"  style={{textDecoration:"none"}}>Xem thêm</a></h6>
                    </div>
                    <div className="wrap"></div>
                </div>
            </div> 
            ))}
    </div>
  )
}