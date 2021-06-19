import React, {useEffect} from 'react'
import './ClientHome.css'
export default function ClientHome() {
  
  return (
    <div>
      <div className="slide-show">
          <div className="slides">
            <input type="radio" name="slide" id="r1"/>
            <input type="radio" name="slide" id="r2"/>
            <input type="radio" name="slide" id="r3"/>
            <input type="radio" name="slide" id="r4"/>
            <input type="radio" name="slide" id="r5"/> 
      
            <div className="s1"><img src={(`http://localhost:3000/images/home/slide-1.jpg`)} alt=""/></div>
            <div><img src={(`http://localhost:3000/images/home/slide-2.jpg`)} alt=""/></div>
            <div><img src={(`http://localhost:3000/images/home/slide-3.jpg`)} alt=""/></div>
            <div><img src={(`http://localhost:3000/images/home/slide-4.jpg`)} alt=""/></div>
            <div><img src={(`http://localhost:3000/images/home/slide-5.jpg`)} alt=""/></div>
          </div>
      
          <div className="redirection-for">
            <label for="r1"><i className="fa fa-heart" aria-hidden="true"></i></label>
            <label for="r2"><i className="fa fa-heart" aria-hidden="true"></i></label>
            <label for="r3"><i className="fa fa-heart" aria-hidden="true"></i></label>
            <label for="r4"><i className="fa fa-heart" aria-hidden="true"></i></label>
            <label for="r5"><i className="fa fa-heart" aria-hidden="true"></i></label>
          </div>

          <span className="left"><i className="fa fa-angle-double-left" aria-hidden="true"></i></span>
          <span className="right"><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
      </div>

      <div className="sp-dien-thoai">
        <div className="container">
          <p className="title-dien-thoai">
            SẢN PHẨM NỔI BẬT ĐIỆN THOẠI
          </p>
          <div className="row show-san-pham">
            <div className="col-md-5 slideanim my-left-1">
              <div className="grid">
                <figure className="effect">
                  <img src="Resources/myImages/slide-11.jpg" alt="Sản phẩm điện thoại 1" className="w-100"/>
                  <figcaption></figcaption>
                </figure>
              </div>
              <h4>
                <a href="chitietsanpham.html" className="ten">Điện thoại iPhone 11 Pro Max</a>
              </h4>
              <h5>34.990.000<span className="badge vnd">₫</span></h5>
              <h6><a href="chitietsanpham.html" className="xem-them">Xem thêm</a></h6>
            </div>
            <div className="col-md-5 offset-md-2 slideanim my-left-2" >
              <div className="grid">
                <figure className="effect">
                  <img src="Resources/myImages/slide-21.jpg" alt="Sản phẩm điện thoại 2"  className="w-100"/>
                  <figcaption></figcaption>
                </figure>
              </div>
              <h4>
                <a href="chitietsanpham.html" className="ten">Điện thoại Samsung Galaxy Note 10+</a>
              </h4>
              <h5>16.490.000<span className="badge vnd">₫</span></h5>
              <h6><a href="chitietsanpham.html" className="xem-them">Xem thêm</a></h6>
            </div>
            <div className="col-md-5 slideanim2 my-left-1 mt-4">
              <div className="grid">
                <figure className="effect">
                  <img src="Resources/myImages/slide-31.jpg" alt="Sản phẩm điện thoại 3"  className="w-100"/>
                  <figcaption></figcaption>
                </figure>
              </div>
              <h4>
                <a href="chitietsanpham.html" className="ten">Điện thoại OPPO Reno4</a>
              </h4>
              <h5>8.490.000<span className="badge vnd">₫</span></h5>
              <h6><a href="chitietsanpham.html" className="xem-them">Xem thêm</a></h6>
            </div>
            <div className="col-md-5 offset-md-2 slideanim1 my-left-2 mt-4">
              <div className="grid">
                <figure className="effect">
                  <img src="Resources/myImages/slide-41.jpg" alt="Sản phẩm điện thoại 4" className="w-100"/>
                  <figcaption></figcaption>
                </figure>
              </div>
              <h4>
                <a href="chitietsanpham.html" className="ten">Điện thoại Realme 7</a>
              </h4>
              <h5>6.990.000<span className="badge vnd">₫</span></h5>
              <h6><a href="chitietsanpham.html" className="xem-them">Xem thêm</a></h6>
            </div>
          </div>
          <div className="clearfix"></div>

        </div>
      </div>
    </div>
  )
}
