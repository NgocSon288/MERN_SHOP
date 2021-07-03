import React, { useEffect, useContext,useState} from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import Pagination from "react-js-pagination";
import './Profile.css'
import $ from 'jquery'
import '../../../assets/admin/js/profile.js'
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/client/UserContext";
import * as USER_TYPE from './../../../reducers/client/userType'
import { AuthContext } from './../../../contexts/client/AuthContext'
import { OrderContext } from '../../../contexts/admin/OrderContext'
import * as ORDER_DETAIL_TYPE from '../../../reducers/admin/orderDetailType.js'
import { OrderDetailContext } from '../../../contexts/admin/OrderDetailContext'
import { SeenProductContext } from "../../../contexts/client/SeenProductsContext";
import Anoumane from "./Anoumane";
import ListProduct from "./ListProduct";
export default function ProfileClient() {
const [order,setOrder]=useState({})
const { authState } = useContext(AuthContext)
const {seenProducts}=useContext(SeenProductContext)
const [user, setUser] = useState({})
const [date,setDate] = useState('')
const [myFavourite,setFavouri]=useState()
const [mySeen, setSeen] = useState()
let { orderDetails, dispatch } = useContext(OrderDetailContext)
const { orders} = useContext(OrderContext)
let [activePage, setActivePage] = useState(1);
let [totalItemsCount, setTotalItemsCount] = useState(1);
let [productsActivePage, setProductsActivePage] = useState([]);
let itemsCountPerPage = 5;
useEffect(() => {
    if(orders && orders.length>0 &&user!=null )
    {
        const oF=orders.filter((o)=>o.user._id===user._id)
        setOrder(
            oF.reverse()
        )
    }
  }, [orders])

useEffect(()=>{
    const setdate='2020-07-17'
    dispatch({
        type:ORDER_DETAIL_TYPE.GET_ORDER_DETAILS_BY_USER_ID,
        payload:null,
    })
    setDate(setdate)
},[])
useEffect(()=>{},[date])
useEffect(()=>{
    if (authState && authState.isAuthenticated) {
        setUser({ ...authState.user._doc })
      }
    $(".them-dia-chi-card").slideUp();
},[authState])
useEffect(()=>{
    if (orderDetails && order && orderDetails.length>0) {
            const favourArrayId = orderDetails.map(o => o.product._id )
            const favourSet=new Set(favourArrayId)
            setTotalItemsCount(orderDetails.length);
            let index = (activePage - 1) * itemsCountPerPage;
            setProductsActivePage([
              ...orderDetails.slice(index, index + itemsCountPerPage),
            ]);
            const FavourProducts = []
            for(let i=0;i<favourSet.size;i++){
                  const pro=orderDetails.find(o=>o.product._id==favourSet[i])
            }
            for (let elem of favourSet) {
                const pro=orderDetails.find(o=>o.product._id==elem)
                FavourProducts.push(pro.product)

            }
            const eachRowF = [...Array(Math.ceil(FavourProducts.length/3))]
            const myRowsF = eachRowF.map((eR,i) => FavourProducts.slice(i*3,i*3 +3))
            setFavouri(myRowsF)
    }
},[orderDetails])
useEffect(()=>{
    const eachRow = [...Array(Math.ceil(seenProducts.length/3))]
    const myRows = eachRow.map((eR,i) => seenProducts.slice(i*3,i*3 +3))
    setSeen(myRows);
},[seenProducts,orderDetails])
const onChange = async (e) => {
    const newData = { ...user, [e.target.name]: e.target.value }
    setUser(newData)
  }
const onChangeDate=async (e)=>{
    setDate(e.target.value)
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
  const handlePageChange = (pageNumber) => {
    let index = (pageNumber - 1) * itemsCountPerPage;
    setProductsActivePage([
      ...orderDetails.slice(index, index + itemsCountPerPage),
    ]);
    setActivePage(pageNumber);
  };
  const convertDatetime = (date) => {
    date = new Date(date)
    let da = date.getDate()
    let mo = date.getMonth() + 1
    let ye = date.getFullYear()
    return `${da}/${mo}/${ye}`
  }
  const detailOrder=(date)=>{
    date = new Date(date)
    var time=new Date()
    var hnow=time.getHours()
    var daynow= time.getDate();
    var monthnow=time.getMonth()+1; 
    let da = date.getDate()
    let h=date.getHours()
    let mo = date.getMonth() + 1
    let ye = date.getFullYear()
    var trangThai=''
    for(var i=0;i<order.length;i++)
    {
        if(monthnow-mo==0&&daynow-da==0&&hnow-h<=14)
           {
            trangThai="hoan-tra"
               
           }
        else if(monthnow-mo>1||daynow-da>=15)
           {
            trangThai="bi-huy"
               
           }
        else if(monthnow-mo<=1)
        {
           trangThai="thanh-cong"
        }
        console.log(h)
    }
    return trangThai
  } 
  const detailOrder2=(date)=>{
    date = new Date(date)
    var time=new Date()
    var hnow=time.getHours()
    var daynow= time.getDate();
    var monthnow=time.getMonth()+1; 
    let da = date.getDate()
    let h=date.getHours()
    let mo = date.getMonth() + 1
    let ye = date.getFullYear()
    var trangThai=''
    for(var i=0;i<order.length;i++)
    {
        if(monthnow-mo==0&&daynow-da==0&&hnow-h<=14)
           {
            trangThai="Đang xử lý"
               
           }
        else if(monthnow-mo>1||daynow-da>=15)
           {
            trangThai="Bị hủy"
               
           }
        else if(monthnow-mo<=1)
        {
           trangThai="Thành công"
        }
    }
    return trangThai
  } 
  const onSubmit = async (e) => {
    try {console.log(date)
    } catch (error) {
      alert(error)
    }
  }
  const [myModal, setMyModal] = useState(false)
  const changeMyModal=()=>{
    if(!myModal){
        $(".them-dia-chi-card").slideDown(500);
        setMyModal(!myModal)
    }
    else{
        $(".them-dia-chi-card").slideUp();
        setMyModal(!myModal)
    }
  }
    return(
        <div data-spy="scroll" data-target="#myScrollspy" data-offset="100" style={{position:'relative'}}>
        <div className="container">
           <div className="row mt-0" style={{marginTop: "20px"}}>
                    <div class="col-4" id="myScrollspy"  style={{minWidth: "18px", marginBottom: "68px"}}>
                        <ul class=" nav-pills nav-stacked my-scroll menu-items" style={{boxShadow: "0px 0px 15px 0px #D6D6D6", padding: "10px"}}>
                            <li data-scroll="s1" class="ngoc-active"> 
                                <a href="#s1" className="my-section">
                                        <div className="my-secsion-item"> 
                                            <img src={`http://localhost:3000/images/user/${user.image}`} alt="" className="user-img"/>
                                            <p className="user-name-pro my-active">{user.name}</p> 
                                        </div>
                                </a>
                            </li>
                            <li data-scroll="s2">
                                <a href="#s2" className="my-section">
                                    <div className="my-secsion-item"> 
                                        <img src={`http://localhost:3000/images/user/icon-chuong.jpg`} alt="" className="user-img"/>
                                        <p className="user-name-pro">Thông báo của tôi</p> 
                                    </div>
                                </a>
                            </li> 
                            <li data-scroll="s3">
                                <a href="#s3" className="my-section">
                                    <div className="my-secsion-item"> 
                                        <img src={`http://localhost:3000/images/user/icon-don-hang.png`} alt="" className="user-img"/>
                                        <p className="user-name-pro">Quản lý đơn hàng</p> 
                                    </div>
                                </a>
                            </li> 
                            <li data-scroll="s4">
                                <a href="#s4" className="my-section">
                                    <div className="my-secsion-item"> 
                                        <img src={`http://localhost:3000/images/user/icon-dia-chi.png`} alt="" className="user-img"/>
                                        <p className="user-name-pro">Sổ địa chỉ</p> 
                                    </div>
                                </a>
                            </li> 
                            <li data-scroll="s5">
                                <a href="#s5" className="my-section">
                                    <div className="my-secsion-item"> 
                                        <img src={`http://localhost:3000/images/user/icon-da-xem.png`} alt="" className="user-img"/>
                                        <p className="user-name-pro">Sản phẩm đã xem</p> 
                                    </div>
                                </a>
                            </li> 
                            <li data-scroll="s6">
                                <a href="#s6" className="my-section">
                                    <div className="my-secsion-item"> 
                                        <img src={`http://localhost:3000/images/user/icon-yeu-thich.jpeg`} alt="" className="user-img"/>
                                        <p className="user-name-pro">Sản phẩm yêu thích</p> 
                                    </div>
                                </a>
                            </li>  
                        </ul>
                    </div>
            <div class="col-8 my-al" style={{backgroundColor: "rgb(239, 239, 239)",boxShadow: "0px 0px 15px 0px #D6D6D6"}}>
            <div id="s1" class="p-5 pekora">
                    <h1 class="title">Thông tin tài khoản</h1>
                    <div style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)"}}> 
                        <div class="my-group">
                            <label for="name" class="col-lg-3 label-text">Họ tên:</label>
                            <div class="col-lg-9">
                                <Input type="text" class="my-control w-100" name="name" value={user.name} onChange={(e)=>onChange(e)}>{user.name}</Input>
                            </div>
                        </div> 

                        <div class="my-group">
                            <label for="phone" class="col-lg-3 label-text">Số điện thoại:</label>
                            <div class="col-lg-9">
                                <Input type="text" class="my-control w-100" name="phone" value={user.phone} onChange={(e)=>onChange(e)}>{user.phone}</Input>
                            </div>
                        </div> 

                        <div class="my-group">
                            <label for="email" class="col-lg-3 label-text">Email:</label>
                            <div class="col-lg-9">
                                <Input type="email" class="my-control w-100" name="email" value={user.email} onChange={(e)=>onChange(e)}>{user.email}</Input>
                            </div>
                        </div> 

                        <div class="my-group">
                            <label for="address" class="col-lg-3 label-text">Địa chỉ:</label>
                            <div class="col-lg-9">
                                <Input type='textarea' name='address' class="my-control w-100" id="address" rows="3"  value={user.address} onChange={(e)=>onChange(e)}></Input> 
                            </div>
                        </div> 

                        <div class="my-group">
                            <label for="address" class="col-lg-3 label-text">Giới tính:</label>
                            <div class="col-lg-9 my-radio">
                                <label for="nam" style={{marginRight: "50px"}}><input id="nam" type="radio" name="gt" class="mr-2 d-inline-block" checked/>Nam</label>
                                <label for="nu"><input id="nu" type="radio" name="gt" class="mr-2 d-inline-block"/>Nữ</label>
                            </div>
                        </div> 

                        <div class="my-group">
                            <label for="birthday" class="col-lg-3 label-text">Ngày sinh:</label>
                            <div class="col-lg-9">
                                <Input type="date" class="my-control w-100" value={date} onChange={(e)=>onChangeDate(e)}/>
                            </div>
                        </div> 

                        <div class="my-group pb-3">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-9">
                                <button class="btn btn-primary px-5 mt-3" style={{fontSize: "16px"}}  onClick={(e) => onSubmit(e)}>CẬP NHẬT</button>
                            </div>
                        </div>  

                        

                    </div>
                </div>
                <div id="s2" class="p-5 pekora">
                    <h1 class="title">Thông báo của tôi</h1>
                    <Anoumane></Anoumane>
                </div>
                <div id="s3" class="p-5 pekora ">
                    <h1 class="title">Đơn hàng của tôi <span className="my-so-luong">({orderDetails.length})</span></h1>
                    <div className="section-content">

                        <table className="don-hangs">                            
                            <tr>
                                <th>ID</th>
                                <th>Ngày mua   </th>
                                <th>Sản phẩm   </th>
                                <th>Tổng tiền  </th>
                                <th>Trạng thái </th>
                            </tr>
                            {productsActivePage &&
                                productsActivePage.map((item,i) => (
                            <tr className={order[i] && order[i].createdAt &&detailOrder(order[i].createdAt)}>
                                <td>{item._id.slice(14.20)}                 </td>
                                <td> {order[i] && order[i].createdAt &&convertDatetime(order[i].createdAt)}        </td>
                                <td><a href="chitietsanpham.html">{item.product.name}</a></td>                                
                                <td>{item && item.product &&`${convertMoney('.',item.product.price)}đ`}              </td>
                                <td >{order[i] && order[i].createdAt &&detailOrder2(order[i].createdAt)}</td>
                            </tr>
                            ))}
                        </table>
                        <div className="my-pagination">
                            <Pagination
                            activePage={activePage}
                            itemsCountPerPage={itemsCountPerPage}
                            totalItemsCount={totalItemsCount}
                            pageRangeDisplayed={3}
                            onChange={handlePageChange}
                            />
                        </div>                         
                    </div> 
                </div>
                <div id="s4" class="p-5 pekora">
                    <h1 class="title">Sổ địa chỉ</h1>
                    <div class="thong-baos">
                        <div class="wrapper-item-gio-hang card-san-pham card-close-7">
                            <div class="content-pro w-100">
                                <div class="thong-tin thong-tin-dia-chi"> 
                                    <div class="thong-bao-head">
                                        <span class="ten-lead">Huỳnh Ngọc Sơn</span>
                                        <i class="fa fa-check-circle-o text-success" aria-hidden="true" style={{fontSize: "14px"}}></i> 
                                        <span class="dia-chi-lead">Địa chỉ mặc định</span>
                                    </div>
                                    <div class="thong-bao-text">
                                        <p>
                                            <span class="text-lead">Địa chỉ:</span>
                                            ĐH Nông Lân, TP HCM( Nhà trọ sinh viên, đường số 1), Phường Linh Trung, Quận Thủ Đức, Hồ Chí Minh
                                        </p>
                                        <p>
                                            <span class="text-lead">Điện thoại:</span>
                                            0351 521 032
                                        </p>
                                    </div>
                                    <div class="text-center"><a href="javascript:void(0)" class="cap-nhat">CẬP NHẬT</a></div>
                                </div>

                            </div>
                            <button class="close" id="data-close-7">
                                <span>X</span>
                            </button>
                        </div> 
                        {(<div class="wrapper-item-gio-hang card-san-pham card-close-9 them-dia-chi-card">
                            <div class="thong-bao-content them-dia-chi-wrap" id="alert-them1">  
                                <div class="thong-bao-text mt-2">
                                    <div class="row">
                                        <div class="col-lg-4">Họ tên:</div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" placeholder="Tên người nhận..."/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">Địa chỉ:</div>
                                        <div class="col-lg-8">
                                            <textarea name="" id="" rows="3" class="form-control" placeholder="Địa chỉ người nhận..."></textarea>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">Số điện thoại:</div>
                                        <div class="col-lg-8">
                                            <input type="text" class="form-control" placeholder="Số điện thoại người nhận.../"/>
                                        </div>
                                    </div> 
                                </div>
                                <div class="w-100">
                                    <button class="btn btn-primary d-block mx-auto" style={{minWidth: "100px", fontSize:"16px"}}>
                                        THÊM
                                    </button>
                                </div>
                            </div>
                            <button class="close" id="close-them-dia-chi">
                                <span onClick={changeMyModal}>X</span>
                            </button>
                        </div>)}
                        <button class="btn btn-info" style={{fontSize:"16px"}} id="btn-them" onClick={changeMyModal}>
                            <i class="fa fa-plus mr-3" aria-hidden="true"></i>THÊM ĐỊA CHỈ MỚI
                        </button>
                    </div>
                </div>
                <div id="s5" class="p-5 pekora">
                   <h1 class="title">Sản phẩm đã xem <span class="my-so-luong">({seenProducts.length})</span></h1>
                       <ListProduct products={mySeen}></ListProduct>
                </div>
                <div id="s6" class="p-5 pekora">
                    <h1 class="title">Sản phẩm yêu thích <span class="my-so-luong">({myFavourite && myFavourite.flat().length})</span></h1>
                    <ListProduct products={myFavourite}></ListProduct>
                </div>
            </div>
           </div>
        </div>
        </div>
    )
}