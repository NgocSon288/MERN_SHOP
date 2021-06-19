import React, { useEffect, useContext,useState} from "react";
import './Product.css'
import {
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import ReactStars from "react-rating-stars-component";
import { ProductContext } from "../../../contexts/client/ProductContext";
import ReadMoreReact from 'read-more-react';
import {FaStar,FaRegStar} from "react-icons/fa"
export default function ProductDetail() {
 const [data, setData] = useState({
    name: '',
    description: '',
    logo: '',
    _id: '',
    price:'',
    promotion:'',
    content:'',
	parameter:[],
	rating:'',
  })
  const { products, dispatch } = useContext(ProductContext)
	
  useEffect(() => {
    var location = window.location.href
    const index = location.lastIndexOf('/') + 1
    const id = location.substring(index)

    if (products && products.length > 0) {
      const product = products.find((p) => p._id === id)
    	setData({
        ...data,
        name: product.name,
        description: product.description,
        image: product.image,
        _id: product._id,
        promotion:product.promotion,
        price: product.price,
        content: product.content,
		parameter: product.parameter,
		rating: product.rating,
      })
    }
  }, [products])
  return (
    <div>
        <div className="py-0 chi-tiet-san-pham">
           <div className="container py-xl-4 py-lg-2">
              <div className="row thong-tin-nhanh-img" style={{paddingTop: "15px", marginTop: "30px"}}>
                  <div className="col-lg-5 col-md-8 p-0 mt-2">
                  <div className="show-sp row w-100 m-0 img-dien-thoai-show" >
						<div className="slide-show">  
							<div className="slides">  
								<input type="radio" name="" id="r1"/>
								<input type="radio" name="" id="r2"/>
								<input type="radio" name="" id="r3"/>

								<div className="s1"><img src={data.image && `http://localhost:3000/images/product/${data.image.split("|")[0]}`} alt=""/></div> 
								<div><img src={data.image && `http://localhost:3000/images/product/${data.image.split("|")[1]}`} alt=""/></div> 
								<div><img src={data.image && `http://localhost:3000/images/product/${data.image.split("|")[2]}`} alt=""/></div> 
							</div>	 
						</div>
						<div className="row w-100 mt-1 ml-0">
							<label className="col-4 px-0 wrap-img label-img" for="r1">
								<a href="javascript:void(0)"><img src={data.image && `http://localhost:3000/images/product/${data.image.split("|")[0]}`} data-src="Resources/myImages/si1.jpg" className="image-show-sm" alt="ASDASD"/></a> 
							</label>
							<label className="col-4 px-0 wrap-img text-center label-img" for="r2">
								<a href="javascript:void(0)"><img src={data.image && `http://localhost:3000/images/product/${data.image.split("|")[1]}`} data-src="Resources/myImages/si2.jpg" className="image-show-sm" alt="ASDASD"/> </a>
							</label>
							<label className="col-4 px-0 wrap-img text-right label-img" for="r3">
								<a href="javascript:void(0)"><img src={data.image && `http://localhost:3000/images/product/${data.image.split("|")[2]}`}data-src="Resources/myImages/si3.jpg" className="image-show-sm" alt=""/> </a>
							</label>
						</div>		
					</div>
                  </div> 
                  <div className="col-lg-7">
						<h3 className="mb-3"><strong>{data.name}</strong></h3>
						<p className="mb-3">
							<div className="danh-gia-trung-binh mb-2">
								<div className="w-100 d-flex text-center justify-content-star align-items-center"> 
								<ul className="list-unstyled list-inline mb-0 star">
		                        {[...Array(5)].map((star,i)=>{
			                      const rating=i+1
								  return(
									data.rating >= rating ?
								(<li>
									<FaStar size={25}
									color={"#ffc107"}
									/>
								</li>)
								:(
									<li>
										<FaRegStar size={25}
										color={"#ffc107"}
									/>
									</li>
								)
								);
		                        })}
								</ul>
									<a href="#danh-gia-kh" style={{fontSize:"20px", color: "rgb(0, 127, 240)", marginLeft: "10px"}} >(Xem 80 đánh giá)</a>	
								</div>
							</div>
							<del className="mx-2 font-weight-light" id="del-gia">{data.price}</del>
							<span className="item_price mx-3 text-danger" id="span-gia">{data.promotion}<span className="badge badge-danger"
									style={{fontSize: "10px",verticalAlign: top,marginTop: "5px" }} >đ</span></span>
						
							<span className="label-tra-gop">Trả góp 0%</span> 

							<div className="opstion w-100">
								<p>Bạn đang xem phiên bản: <span id="ops-text">512GB</span></p>
								<div>
									<button data-del="32.990.000đ">64GB - 30.990.000đ</button>
									<button data-del="36.990.000đ">256GB - 34.990.000đ</button>
									<button data-del="40.990.000đ">512GB - 38.990.000đ</button>
								</div>
							</div>

							<label className="lable-phi-ship">Miễn phí ship trên toàn quốc</label>
						</p>
					 <div className="card">
						 <div className="card-header">
							 <h2 className="text-left"><strong>KHUYẾN MÃI TRỊ GIÁ 2.000.000₫</strong></h2>
							 <p>Giá và khuyến mãi dự kiến áp dụng đến 31/10</p>
						 </div>
						 <div className="card-body py-1"> 
							 <ul className="khuyen-mai mb-0 list-unstyled">
								 <li><i className="fa fa-check-circle" aria-hidden="true"></i>Giảm giá 2,000,000đ</li>
								 <li><i className="fa fa-check-circle" aria-hidden="true"></i>Giảm giá 2,000,000đ khi tham gia thu cũ đổi mới <a href="#">Xem chi tiết</a></li>
								 <li><i className="fa fa-check-circle" aria-hidden="true"></i>Pin sạc dự phòng giảm 30% khi mua kèm</li>
							 </ul>
						 </div>
						 <hr style={{margin: "5px 0px"}}/>
						 <div className="card-body py-1"> 
							 <ul className="khuyen-mai mb-0 list-unstyled">
								 <li><i className="fa fa-gift" aria-hidden="true"></i><span className="text-danger">Tặng 500.000₫</span> mua hàng tại website thành viên, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác <a href="#">click xem chi tiết</a></li> 
							 </ul>
						 </div>
					 </div>
					<br/>
					<br></br>
					 <button className="w-100 btn btn-primary mua-ngay" style={{backgroundColor: "#ff823b", border: "none"}}  >
						 <p className="display-text text-center text-white"><strong>MUA NGAY</strong></p>
						 <span>Giao tận nơi hoặc nhận tại siêu thị</span>
					 </button>
					 <br/>
					 <br></br>
					 <div className="row w-100 ml-0">
						 <div className="col-6 pl-0">
							<button className="w-100 btn btn-primary mua-ngay">
								<p className="display-text text-center text-white"><strong>MUA TRẢ GÓP 0%</strong></p>
								<span>Thủ tục đơn giản</span>
							</button>
						 </div>
						 <div className="col-6 pr-0">
							<button className="w-100 btn btn-primary mua-ngay">
								<p className="display-text text-center text-white"><strong>TRẢ GÓP 0% QUA THẺ</strong></p>
								<span>Visa, Master, JCB</span>
							</button>
						</div>
					 </div>
                   
					 

				</div>
              </div>
			  <h3 className="head-title">
				Thông số kỹ thuật
			  </h3>			  
			{data.parameter &&
            [...data.parameter].map((item, i) => (
			<ul className="thong-so w-100">
				<li className="thong-so-item" key={i}>
					<div className="row"  >
						<p className="col-4">{item.name}:</p>
						<p className="col-8" >{item.value}</p>
					</div>
				</li>
				
			</ul> 
			))}
              <h3 className="head-title">
				Đặc điểm nổi bật của {data.name}
			</h3>
			<div dangerouslySetInnerHTML={{__html:data.content}} class="coll" id="my-coll">
			</div>
			<button id="btnXemThem"  class="btn btn-primary mt-5" style={{borderRadius: "5px",fontSize:"16px", marginLeft:"50%"}}>
						Xem thêm
			</button> 
           </div>
        </div> 
    </div>
  );
}
