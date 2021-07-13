import React, {useState,useContext,useEffect} from 'react'
//import { Link } from 'react-router-dom'
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Input, Button
} from 'reactstrap';
import './ClientHome.css'
import { ProductContext } from "../../../contexts/client/ProductContext";
import SlideShow from "../../advertisement/client/SlideShow"
import '../../../assets/admin/js/home'
import { ClientAdvertisementContext } from '../../../contexts/client/AdvertisementContext'
export default function ClientHome() {
  const { advertisements } = useContext(ClientAdvertisementContext)

  const [slides, setSlide] = useState();
  
  useEffect(() => {
    setSlide(advertisements)
  }, [advertisements])

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [email, setEmail] = useState(false)
  const successMess = () =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.length > 0 && re.test(String(email))){
      alert("Bạn đã đăng ký nhận thông báo thành công!");
      toggle()
    }
    else{
      alert("Vui lòng nhập địa chỉ email hợp lệ!");
    }
  }

  const { products } = useContext(ProductContext)
  const [ phone, setPhone ] = useState()
  const [ tablet, setTablet ] = useState()
  const [ smartwatch, setSmartwatch ] = useState()

  useEffect(() => {
    const phoneProduct = products.filter((p) => p.category.name === "Điện thoại")
    if(phoneProduct){
      setPhone(phoneProduct.slice(0, 4))
    }
    const tabletProduct = products.filter((p) => p.category.name === "Tablet")
    if(tabletProduct){
      setTablet(tabletProduct.slice(0, 3))
    }
    const smartwatchProduct = products.filter((p) => p.category.name === "Smart Watch")
    if(smartwatchProduct){
      setSmartwatch(smartwatchProduct.slice(0, 2))
    }
  },[products])

  const classForDivPhone = ["slideanim my-left-1", "offset-md-2 slideanim my-left-2", "slideanim2 my-left-1 mt-4", "offset-md-2 slideanim1 my-left-2 mt-4"]
  const classForDivWatch = ["col-md-5 sp-smart-watch-grid sp-smart-watch-grid1 slideanim my-left-1","col-md-5 offset-md-2 sp-smart-watch-grid sp-smart-watch-grid2 slideanim my-left-2"]
  return (
    <div>
      {slides && <SlideShow slides={slides}></SlideShow>}
      <div className="sp-dien-thoai">
        <div className="container">
          <p className="title-dien-thoai">
            SẢN PHẨM NỔI BẬT ĐIỆN THOẠI
          </p>
          <div className="row show-san-pham">
            {phone && phone.map((p,i)=>{
                  return(
                    <div className={"col-md-5 " + classForDivPhone[i]}>
                      <a href={"/Product-Detail/" + p._id}>
                        <div className="grid">
                          <figure className="effect">
                            <img src={p.image && `http://localhost:3000/images/product/${p.image.split("|")[0]}`} alt={"Sản phẩm điện thoại " + (i + 1)} className="w-100"/>
                            <figcaption></figcaption>
                          </figure>
                        </div>
                      </a>
                      <h4>
                        <a href={"/Product-Detail/" + p._id} className="ten ten-san-pham">{p.name}</a>
                      </h4>
                      <h5>{new Intl.NumberFormat('de-DE').format(parseInt(p.price))}<span className="badge vnd">₫</span></h5>
                      <h6><a href={"/Product-Detail/" + p._id} className="xem-them">Xem thêm</a></h6>
                    </div>
                  )
                }
              )
            }
            </div>
          <div className="clearfix"></div>
        </div>
      </div>

      <div className="w-75 mx-auto" >
        <p className="title-dien-thoai" style={{marginTop: '50px'}}>
          SẢN PHẨM NỔI BẬT TABLET
        </p>
        <div className="row div-parent-sp"> 
          {tablet && tablet.map((t,i) =>{
            return(
              <div className={"col-md-6 slideanim" + (i + 3)} style={{padding: '0px 5px'}}>
                <div style={{padding: '5px 0px'}} className="tablet-card">
                  <img src={t.image && `http://localhost:3000/images/product/${t.image.split("|")[0]}`} alt="Sản phẩm tablet 1" className="w-100"/>
                  <div className="my-content-denim">
                    <p className="ten ten-san-pham">{t.name}</p>
                    <p className="noi-dung"></p>
                    <h5>{new Intl.NumberFormat('de-DE').format(parseInt(t.price))}<span className="badge vnd"><sup>đ</sup></span></h5>
                    <a href={"/Product-Detail/" + t._id} className="xem-them">
                      <span>Xem thêm</span>
                    </a>   
                  </div>
                </div> 
              </div>
            )
          })}
          <div className="clearfix"></div>
        </div>		 
      </div>

      <div className="laptop-noibat">
        <p className="title-dien-thoai" style= {{marginTop: '50px'}}>
          SẢN PHẨM NỔI BẬT LAPTOP
        </p>
        <div className="row w-75 mx-auto"> 
          <div className="col-md-6 styl slideanim4" style={{padding: '0px 5px'}}>
            <div className="tablet-card" style={{padding: '5px 0px',height: '440px'}}>
              <img src={`http://localhost:3000/images/product/72880.74380240304lenovo-legion-5-15imh05-i7-82au0051vn-210520-040515-600x600.jpg`} alt="Sản phẩm laptop 1" className="w-100" style={{height: '440px'}}/>
              <div className="style-grid-2-text my-content-denim my-content-denim2">
                <a href={"/Product-Detail/60cf1e655451001acc0d380f"}>
                  <p className="ten ten-san-pham">Laptop Lenovo Legion 5 15IMH05</p>
                </a>
                <p className="noi-dung"></p>
                <h5>{new Intl.NumberFormat('de-DE').format(parseInt(25990000))}<span className="badge vnd"><sup>đ</sup></span></h5>
                <a href={"/Product-Detail/60cf1e655451001acc0d380f"} className="xem-them">
                  <span>Xem thêm</span>
                </a>   
              </div>
            </div> 
          </div>
          <div className="col-md-6 slideanim3 h-50" style={{padding: '0px 5px'}}>
            <div className="tablet-card" style={{padding: '0px',height: '220px'}}>
              <img src={`http://localhost:3000/images/product/84104.50853118148acer-nitro-5-an515-45-r3sm-r5-nhqbmsv005-600x600.jpg`} alt="Sản phẩm laptop 2" className="w-100" style={{height: '220px'}}/>
              <div className="style-grid-2-text my-content-denim my-content-denim3">
                <a href={"/Product-Detail/60d09cbc567a1d3da4c07f52"}>
                  <p className="ten ten-san-pham">Laptop Acer Nitro 5 AN515 45 R3SM R5</p>
                </a>
                <p className="noi-dung"></p>
                <h5>{new Intl.NumberFormat('de-DE').format(parseInt(22310000))}<span className="badge vnd"><sup>đ</sup></span></h5>
                <a href={"/Product-Detail/60d09cbc567a1d3da4c07f52"} className="xem-them">
                  <span>Xem thêm</span>
                </a>   
              </div>
            </div>
            <div className="tablet-card slideanim3" style={{padding: '5px 0px',height: '220px' }}>
              <img src={`http://localhost:3000/images/product/80598.57064757006style-2.png`} alt="Sản phẩm laptop 3" className="w-100" style={{height: '220px'}}/>
              <div className="style-grid-2-text my-content-denim  my-content-denim3">
                <a href={"/Product-Detail/60d5c955b527d5508083d6f0"}>
                  <p className="ten ten-san-pham">Laptop Asus Rog Zephyrus</p>
                </a>
                <p className="noi-dung"></p>
                <h5>{new Intl.NumberFormat('de-DE').format(parseInt(41990000))}<span className="badge vnd">₫</span></h5>
                <a href={"/Product-Detail/60d5c955b527d5508083d6f0"} className="xem-them">
                  <span>Xem thêm</span>
                </a>   
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      <div className="new-sp" style={{backgroundImage:`url("http://localhost:3000/images/home/vivo-v20-sale.png")`}}>
        <div className="new-sp-text">
          <p className="ten ten-san-pham">vivo <span>V20</span></p>
          <p className="cap1">Selfie Lấy Nét Tự Động Theo Mắt 44MP</p>
          <p className="cap2">Kính Mờ Siêu Mỏng | Chụp Đêm 64MP</p>
          <div className="d-flex justify-content-center align-items-center">
            <a href={`http://localhost:3001/Product-Detail/60d6ebc51c52352148f819f0`}>
              <button >
                ĐẶT TRƯỚC <br/>
                <span>Cọc 500.000<sup>đ</sup> </span>
              </button>
            </a> 
            <a href={`http://localhost:3001/Product-Detail/60d6ebc51c52352148f819f0`}>
              <button>
                TRẢ GÓP <br/>
                <span>Cọc 500.000<sup>đ</sup> </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="sp-smart-watch sp-dien-thoai">
        <div className="container">
          <p className="title-dien-thoai">
            SẢN PHẨM NỔI BẬT SMART WATCH
          </p>
          <div className="sp-smart-watch-grids row show-san-pham">
            {smartwatch && smartwatch.map((sw,i)=>{
              return(
                <div className={classForDivWatch[i]}>
                  <a href={"/Product-Detail/" + sw._id}>
                    <div className="grid">
                      <figure className="effect">
                        <img src={sw.image && `http://localhost:3000/images/product/${sw.image.split("|")[0]}`} alt={"Đồng hồ " + (i + 1)} style={{backgroundColor: 'white'}} className="w-100"/>
                        <figcaption></figcaption>
                      </figure>
                    </div>
                  </a>
                  <h4>
                    <a href={"/Product-Detail/" + sw._id} className="ten ten-san-pham">{sw.name}</a>
                  </h4>
                  <h5>{new Intl.NumberFormat('de-DE').format(parseInt(sw.price))}<span className="badge vnd">₫</span></h5>
                  <h6><a href={"/Product-Detail/" + sw._id} className="xem-them">Xem thêm</a></h6>
                </div>
              )
            })}
          </div>
          <div className="clearfix"></div>

        </div>
      </div>

      <div className="bg-dang-ky" style={{backgroundImage:`url("http://localhost:3000/images/home/banner-contact.jpg")`}}>
        <h3>ĐĂNG KÝ ĐỂ NHẬN THÔNG BÁO MỚI NHẤT</h3>
        <p>Đăng ký với chúng tôi để có quyền truy cập cấp cao nhất vào các phong cách và xu hướng mới của chúng tôi</p>
        <div>
          <a className="btn-dang-ky px-4 py-2" onClick={toggle}>ĐĂNG KÝ</a>
          <Modal isOpen={modal} toggle={toggle} unmountOnClose={true}>
                <ModalHeader toggle={toggle}>ĐĂNG KÝ</ModalHeader>
                <ModalBody>
                    <Input id="email" type="text" onChange={event => setEmail(event.target.value)} placeholder="Vui lòng nhập email"/>{' '}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={successMess}>ĐĂNG KÝ</Button>
                </ModalFooter>
            </Modal>
        </div>
      </div>
    </div>
  )
}
