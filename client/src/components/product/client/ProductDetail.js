import React, { useEffect, useContext,useState,useLayoutEffect} from "react";
import './Product.css'
import { ProductContext } from "../../../contexts/client/ProductContext";
import {FaStar,FaRegStar} from "react-icons/fa"
import $ from 'jquery'
import { CommentContext } from './../../../contexts/client/commentContext'
import { ProductSessionContext } from "../../../contexts/client/ProductSessionContext";
import * as COMMENT_TYPE from './../../../reducers/client/commentType'
import * as PRODUCT_SESSION_TYPE from "./../../../reducers/client/productSessionType";
import { SeenProductContext } from "../../../contexts/client/SeenProductsContext";
import * as SEEN_PRODUCTS_TYPE from '../../../reducers/client/seenProductType'
import { Link } from "react-router-dom";
import '../../../assets/admin/js/hidecomment.js'
export default function ProductDetail() {
 let { comments, dispatchComment } = useContext(CommentContext)
 var location = window.location.href
 const index = location.lastIndexOf('/') + 1
 const id = location.substring(index)
 const {dispatch:seenproductsdispatch}=useContext(SeenProductContext)
 useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);
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
  const { productSessions, dispatch: dispatchProductSession } = useContext(
    ProductSessionContext
  );
  useEffect(() => {
	if(id){
    dispatch({
      type: COMMENT_TYPE.GET_ID_PRODUCT,
      payload: { _id: id },
    })
    }
  }, [])
  useEffect(()=>{
	if(id){
	seenproductsdispatch({
		type:SEEN_PRODUCTS_TYPE.ADD_TO_SEEN_PRODUCT,
		payload:{_id:id},
	})
     }
  },[])
  useEffect(() => {}, [comments]);
  useEffect(() => {}, [productSessions]);
  useEffect(() => {

    if (products && products.length > 0) {
      const product = products.find((p) => p._id === id)
	  if(product){
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
    }
  }, [products])
  const onAddToCart = async (product) => {
    try {
      dispatchProductSession({
        type: PRODUCT_SESSION_TYPE.ADD_TO_CART,
        payload: { product: product },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const tBComment = () => {
    var s = 0
    for (var i = 0; i < comments.length; i++) {
      var s = s + comments[i].starNumber
    }
    var tb = Math.round((s / comments.length*10)) / 10
    return tb
  }
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
  const showDetail = () => {
	let text = $('#btnXemThem').text(); 
	if(text=="Xem thêm"){ 
	    $(".coll").removeClass("hidecmt");
		$("#my-coll").slideDown(400);
		$('#btnXemThem').text("Thu gọn"); 
	}
	else{
		$(".coll").addClass("hidecmt");
		$('#btnXemThem').text('Xem thêm');  
	}
  }

  const chooseOption=(e)=>{
	var text = e.currentTarget.textContent.split(" - ");
	$(".opstion button").each(function(){ 
		$(this).removeClass("btnClick"); 
	}) 
	e.target.classList.add("btnClick");
	
	$("#ops-text").text(text[0]);
	$("#span-gia").text(text[1]);
	$("#del-gia").text($(this).attr("data-del"));
  }
  return (
    <div className="container mb-5 my-wrap">
		<div className="container">
        <ol className="dia-chi">
          <li>
            <Link to='/'>Trang chủ</Link>
          </li>
		  <li><Link to='/Product'>Sản phẩm</Link></li>
          <li className='active'>Chi tiết sản phẩm</li> 
        </ol>
       </div>
        <div className="py-0 chi-tiet-san-pham">
           <div className="container py-xl-4 py-lg-2">
              <div className="row thong-tin-nhanh-img" style={{paddingTop: "5px"}}>
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
						<div className="row w-100 mt-1 ml-0" style={{paddingInline: "0px"}}>
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
									tBComment() >= rating ?
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
									<a href="#danh-gia-kh" style={{fontSize:"20px", color: "rgb(0, 127, 240)", marginLeft: "10px"}} >(Xem {comments.length} đánh giá)</a>	
								</div>
							</div>
							<del className="mx-2 font-weight-light" id="del-gia">{`${convertMoney('.', data.price)}đ`}</del>
							<span className="item_price mx-3 text-danger" id="span-gia">{`${convertMoney('.', data.promotion)}`}<span className="badge badge-danger"
									style={{fontSize: "10px",verticalAlign: 'top',marginTop: "5px" }} >đ</span></span>
						
							<span className="label-tra-gop">Trả góp 0%</span> 

							<div className="opstion w-100">
								<p>Bạn đang xem phiên bản: <span id="ops-text">64GB</span></p>
								<div>
									<button onClick={(e) => chooseOption(e)} data-del={`${convertMoney('.', data.price+1000000)}đ`}>64GB - {`${convertMoney('.', data.promotion+500000)}đ`}</button>
									<button onClick={(e) => chooseOption(e)} data-del={`${convertMoney('.', data.price+3000000)}đ`}>256GB - {`${convertMoney('.', data.promotion+1500000)}đ`}</button>
									<button onClick={(e) => chooseOption(e)} data-del={`${convertMoney('.', data.price+5000000)}đ`}>512GB - {`${convertMoney('.', data.promotion+3000000)}đ`}</button>
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
					 <button className="w-100 btn btn-primary mua-ngay" style={{backgroundColor: "#ff823b", border: "none"}} onClick={() => onAddToCart(data)}  >
						 <Link to={`/order`}>
						 <p className="display-text text-center text-white"><strong>MUA NGAY</strong></p>
						 </Link>
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
			  <h3 className="head-title-product">
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
              <h3 className="head-title-product">
				Đặc điểm nổi bật của {data.name}
			</h3>
			<div dangerouslySetInnerHTML={{__html:data.content}} className="coll hidecmt" id="my-coll"  >
			</div>
			<button id="btnXemThem" onClick={() => showDetail()} className="btn btn-primary mt-5" style={{borderRadius: "5px",fontSize:"16px", marginLeft:"50%"}}>
						Xem thêm
			</button> 
			<div class="face">
					<button class="btn btn-primary" style={{borderRadius: "5px"}}>
						<i class="fa fa-thumbs-up" aria-hidden="true" style={{fontSize: "16px"}}></i>
						<strong style={{fontSize: "16px"}}>Like</strong>
						<span style={{fontSize:"14px"}}>100</span>
					</button>
					<button class="btn btn-primary ml-3" style={{borderRadius: "5px"}}>
						<i class="fa fa-share-alt" aria-hidden="true" style={{fontSize: "16px"}}></i>
						<strong style={{fontSize: "16px"}}>Share</strong> 
					</button>
			</div>
			<div class="nhan-xet mt-5">
					<div className="nhan-xet-content w-60 d-flex justify-content-between align-items-center py-5 pl-3" style={{backgroundColor:"#eee",width:"62%"}}>
						<p className="lead my-pi" style={{fontSize:"18px",marginBottom:"0px",color: "black",width: "61%"}}>Bài viết này có hữu ích cho Bạn không?</p>
						<div className="smile text-center a-nhan-xet text-center px-3 w-25"> 
							<i className="far fa-smile-wink" style={{fontSize: "36px", color: "blue"}}></i> 
							<a href="javascript:void(0)" ><p  style={{color: "black", fontWeight: "bold", fontSize: "16px"}} class="mb-0 my-hi text-center">Hữu ích</p></a>
						</div>
						<div className="smile text-center a-nhan-xet text-center px-3 w-25">  
							<i className="far fa-angry" style={{fontSize: "36px", color: "rgb(116, 9, 50)"}}></i>
							<a href="javascript:void(0)" ><p  class="mb-0 last my-hi text-center" style={{color: "black", fontWeight: "bold", fontSize: "16px"}}>Không hữu ích</p></a>
						</div>
					</div>
				</div>
           </div>
        </div> 
    </div>
  );
}
