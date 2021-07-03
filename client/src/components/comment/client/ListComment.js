import React, { useEffect, useContext, useState } from 'react'
import { Table, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FaStar, FaRegStar } from 'react-icons/fa'
import './ListComment.css'
import $ from 'jquery'
import { CommentContext } from './../../../contexts/client/commentContext'
import { ProductContext } from '../../../contexts/client/ProductContext'
import * as COMMENT_TYPE from './../../../reducers/client/commentType'
export default function ListComment() {
  let { comments, dispatch } = useContext(CommentContext)
  var location = window.location.href
  const index = location.lastIndexOf('/') + 1
  const id = location.substring(index)
  var likeCount=0;
  useEffect(() => {
    dispatch({
      type: COMMENT_TYPE.GET_ID_PRODUCT,
      payload: { _id: id },
    })
  }, [])
  useEffect(() => {
    for (var i = 0; i < comments.length; i++) $('#my-comment' + i).hide()
	$(".aqua").mouseenter(function(){
		$(this).addClass("fas")
		$(this).removeClass("far")
	 })
	 $(".aqua").mouseleave(function(){
		 $(this).removeClass("fas")
		 $(this).addClass("far")
	})
	$(".likeCountChange").click(function(){
		var like = $(this).find(".likeNum").text();
		var count = $(this).find(".likeNum").attr("alt")
		if(count == "true"){
			count = true
			$(this).find(".aqua").removeClass("far")
			$(this).find(".aqua").addClass("fas")
			$(this).find(".aqua").unbind('mouseleave');
		}
		if(count == "false"){
			count = false
			$(this).find(".aqua").removeClass("fas")
			$(this).find(".aqua").addClass("far")
			$(this).find(".aqua").bind('mouseleave', function(){
				$(this).removeClass("fas")
				$(this).addClass("far")
		   });
		}
		$(this).find(".likeNum").text(parseInt(like) + (count ? 1:(-1)))
		$(this).find(".likeNum").attr("alt", !count)
   })
  }, [comments])
  const showComment = (i) => {
    $('#my-comment' + i).slideToggle(400)
}
  const tBComment = () => {
    var s = 0
    for (var i = 0; i < comments.length; i++) {
      var s = s + comments[i].starNumber
    }
    var tb = Math.round((s / comments.length*10)) / 10
	if(isNaN(tb)){tb=0}
    return tb
  }
  const thongKe = (star) => {
    var count = 0
    for (var i = 0; i < comments.length; i++) {
      if (comments[i].starNumber == star) count++
    }
    var thongke = (count / comments.length) * 100
    return thongke + '%'
  }
   return (
  <div>
	<div class="danh-gia-sao w-100" style={{padding: "20px"}}>
	<h3 class="my-danh-gia">Đánh giá</h3>
						<div class="row">
							<div class="col-4 d-flex flex-column text-center align-items-center" style={{borderRight: "1px solid gray"}}>
								<span style={{fontSize: "50px", color: "black"}}>{tBComment()}</span>
								<ul class="list-unstyled list-inline">
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
								<span style={{fontSize: "20px", color: "black"}}>{comments.length} đánh giá</span>	
							</div>
							<div class="col-8 d-flex flex-column justify-content-center">
								<div class="my-line">
									<ul class="list-unstyled list-inline mb-0">
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>  
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>  
									</ul>
									<div class="progress w-50">
										<div class="progress-bar bg-warning" style={{width:thongKe(5)}}></div>
									</div>
								</div>
								<div class="my-line">
									<ul class="list-unstyled list-inline mb-0">
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li> 
										<li><i class="far fa-star star-font" aria-hidden="true"></i></li>
									</ul>
									<div class="progress w-50">
										<div class="progress-bar bg-warning" style={{width:thongKe(4)}}></div>
									</div>
								</div>
								<div class="my-line">
									<ul class="list-unstyled list-inline mb-0">
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="far fa-star star-font" aria-hidden="true"></i></li>
										<li><i class="far fa-star star-font" aria-hidden="true"></i></li>
									</ul>
									<div class="progress w-50">
										<div class="progress-bar bg-warning" style={{width:thongKe(3)}}></div>
									</div>
								</div>
								<div class="my-line">
									<ul class="list-unstyled list-inline mb-0">
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="far fa-star star-font" aria-hidden="true"></i></li>
										<li><i class="far fa-star star-font" aria-hidden="true"></i></li>
										<li><i class="far fa-star star-font" aria-hidden="true"></i></li>
									</ul>
									<div class="progress w-50">
										<div class="progress-bar bg-warning" style={{width:thongKe(2)}}></div>
									</div>
								</div>
								<div class="my-line">
									<ul class="list-unstyled list-inline mb-0">
										<li><i class="fa fa-star my-act" aria-hidden="true"></i></li>
										<li><i class="far fa-star star-font" aria-hidden="true"></i></li>
										<li><i class="far fa-star star-font" aria-hidden="true"></i></li>
										<li><i class="far fa-star star-font" aria-hidden="true"></i></li>
										<li><i class="far fa-star star-font" aria-hidden="true"></i></li>
									</ul>
									<div class="progress w-50">
										<div class="progress-bar bg-warning" style={{width:thongKe(1)}}></div>
									</div>
								</div> 
							</div>
						</div>
						<hr style={{height: "0px"}}></hr>
	
  <h3 className="my-binh-luan text-left" style={{fontSize:"26px", marginTop: "50px"}}>
  Bình luận
   </h3>
   {(!comments || comments.length <= 0) && (
          <div className='my-empty-cart'>
            <img width="200px"
              src='http://localhost:3000/images/product/NoComment.png'
              alt='empty-cart'
            ></img>
			<p  className='my-empty-text'>Chưa có đánh giá</p>
          </div>
        )}
   {comments &&
          comments.map((item, i) => (
   <div className="binh-luan mt-5">
							<div className="binh-luan-header d-flex">
								<div className="icon-kh mr-3 d-flex align-items-center">
									<img src={item.user && item.user.image && `http://localhost:3000/images/user/${item.user.image}`} alt=""/>
								</div>
								<div className="thong-tin-kh" style={{width: "250px"}}>
									<p style={{color: "black"}}>{item.user && item.user.name}</p>
									<p>Nhận xét vào {item.createdAt.slice(0,10)}</p>
								</div>
							</div>
							<div className="my-line mb-4" style={{justifyContent: "start"}}>
								<ul className="list-unstyled list-inline mb-0" style={{marginLeft:"65px"}}>
		                        {[...Array(5)].map((star,i)=>{
			                      const rating=i+1
								  return(
									item.starNumber >= rating ?
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
							</div>
							<span className="conment" style={{fontSize: "14px", fontWeight: "bold"}}>
							   {item.reason}
							</span>
							<p style={{paddingTop:"5px"}}>{item.description}</p>
                           { item.image && item.image.split('|').map((image)=>image&&(
							<div className="cocntainer-img d-flex justify-content-star align-items-center">
								<img src={`http://localhost:3000/images/product/${image}`} alt="" className="w-25 mr-3" style={{maxHeight: "268px"}}/>
							</div>))
                  } 
							<div style={{marginTop:"20px"}}>
								<span className="thaoluan" id={"my-binh-luan-coll" + i} onClick={() => showComment(i)}>Thảo luận</span>
								<span className=" likeCountChange"><span style={{fontSize: "14px",cursor:'pointer'}} ><a className="far fa-thumbs-up mr-1 aqua" aria-hidden="true" ></a>Hữu ích (<span className="likeNum" alt="true">{likeCount}</span>)</span></span>
							</div>
							<div id={"my-comment" + i} className="w-100">
								<textarea className="form-control" rows="5" placeholder="Bình luận của tôi..." style={{fontSize:"15px"}}></textarea>
								<div className="foot w-100 d-flex justify-content-between px-3 py-1" style={{backgroundColor: "white"}}>
									<div className="text-primary" style={{fontSize:"16px"}}><a href="#"><i className="fa fa-camera text-primary mr-2" aria-hidden="true" style={{fontSize: "100px"}}></i>Gửi ảnh</a></div> 
									<button className="btn btn-primary px-2" >GỬI</button>
								</div>
							</div>
							<hr style={{height: "0px"}}></hr>
						</div>
						 ))}
				</div>
   </div>
	  )
  
}
