import React, {useState,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Modal, ModalHeader, ModalBody, ModalFooter, Input, Button
} from 'reactstrap';
import './ClientHome.css'
import { ProductContext } from "../../../contexts/client/ProductContext";
import $ from 'jquery';
import '../../../assets/admin/js/home'
export default function ClientHome() {
  const items = [
    {
      src: `http://localhost:3000/images/home/slide-1.jpg`,
      altText: 'Slide 1',
      key:'1'
    },
    {
      src: `http://localhost:3000/images/home/slide-2.jpg`,
      altText: 'Slide 2',
      key:'2'
    },
    {
      src: `http://localhost:3000/images/home/slide-3.jpg`,
      altText: 'Slide 3',
      key:'3'
    },
    {
      src: `http://localhost:3000/images/home/slide-4.jpg`,
      altText: 'Slide 4',
      key:'4'
    },
    {
      src: `http://localhost:3000/images/home/slide-5.jpg`,
      altText: 'Slide 5',
      key:'5'
    }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    console.log(items.length)
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width={window.innerWidth} height='600px'/>
      </CarouselItem>
    );
  });
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
    console.log(products)
    const phoneProduct = products.filter((p) => p.category.name === "Điện thoại")
    if(phoneProduct){
      setPhone(phoneProduct.slice(0, 4))
    }
    const tabletProduct = products.filter((p) => p.category.name === "Tablet")
    if(tabletProduct){
      setTablet(tabletProduct)
    }
    const smartwatchProduct = products.filter((p) => p.category.name === "Smart Watch")
    if(smartwatchProduct){
      setSmartwatch(smartwatchProduct)
    }
  },[products])

  const classForDivPhone = ["slideanim my-left-1", "offset-md-2 slideanim my-left-2", "slideanim2 my-left-1 mt-4", "offset-md-2 slideanim1 my-left-2 mt-4"]
  const classForDivWatch = ["col-md-5 sp-smart-watch-grid sp-smart-watch-grid1 slideanim my-left-1","col-md-5 offset-md-2 sp-smart-watch-grid sp-smart-watch-grid2 slideanim my-left-2"]
  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={12000}
        stopOnHover={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        useKeyboardArrows={true}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      <div className="sp-dien-thoai">
        <div className="container">
          <p className="title-dien-thoai">
            SẢN PHẨM NỔI BẬT ĐIỆN THOẠI
          </p>
          <div className="row show-san-pham">
            {phone && phone.map((p,i)=>{
                  return(
                    <div className={"col-md-5 " + classForDivPhone[i]}>
                      <div className="grid">
                        <figure className="effect">
                          <img src={p.image && `http://localhost:3000/images/product/${p.image.split("|")[0]}`} alt={"Sản phẩm điện thoại " + (i + 1)} className="w-100"/>
                          <figcaption></figcaption>
                        </figure>
                      </div>
                      <h4>
                        <a href={"/Product-Detail/" + p._id} className="ten">{p.name}</a>
                      </h4>
                      <h5>{new Intl.NumberFormat('ja-JP').format(parseInt(p.price))}<span className="badge vnd">₫</span></h5>
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
                    <p className="ten">{t.name}</p>
                    <p className="noi-dung"></p>
                    <h5>{new Intl.NumberFormat('ja-JP').format(parseInt(t.price))}<span className="badge vnd"><sup>đ</sup></span></h5>
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
                <p className="ten">Laptop Lenovo Legion 5 15IMH05 i7 10750H/8GB/256GB+1TB/120Hz/4GB GTX1650/Win10 (82AU0051VN)</p>
                <p className="noi-dung"></p>
                <h5>{new Intl.NumberFormat('ja-JP').format(parseInt(25990000))}<span className="badge vnd"><sup>đ</sup></span></h5>
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
                <p className="ten">Laptop Acer Nitro 5 AN515 45 R3SM R5 5600H/8GB/512GB/4GB GTX1650/144Hz/Balo/Win10 (NH.QBMSV.005)</p>
                <p className="noi-dung"></p>
                <h5>{new Intl.NumberFormat('ja-JP').format(parseInt(22310000))}<span className="badge vnd"><sup>đ</sup></span></h5>
                <a href={"/Product-Detail/60d09cbc567a1d3da4c07f52"} className="xem-them">
                  <span>Xem thêm</span>
                </a>   
              </div>
            </div>
            <div className="tablet-card slideanim3" style={{padding: '5px 0px',height: '220px' }}>
              <img src={`http://localhost:3000/images/product/80598.57064757006style-2.png`} alt="Sản phẩm laptop 3" className="w-100" style={{height: '220px'}}/>
              <div className="style-grid-2-text my-content-denim  my-content-denim3">
                <p className="ten">Laptop Asus Rog Zephyrus</p>
                <p className="noi-dung"></p>
                <h5>{new Intl.NumberFormat('ja-JP').format(parseInt(41990000))}<span className="badge vnd">₫</span></h5>
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
          <p className="ten">vivo <span>V20</span></p>
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
                  <div className="grid">
                    <figure className="effect">
                      <img src={sw.image && `http://localhost:3000/images/product/${sw.image.split("|")[0]}`} alt="Đồng hồ 1" style={{backgroundColor: 'white'}} className="w-100"/>
                      <figcaption></figcaption>
                    </figure>
                  </div>
                  <h4>
                    <a href={"/Product-Detail/" + sw._id} className="ten">{sw.name}</a>
                  </h4>
                  <h5>{new Intl.NumberFormat('ja-JP').format(parseInt(sw.price))}<span className="badge vnd">₫</span></h5>
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
