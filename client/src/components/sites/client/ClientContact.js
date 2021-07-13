import React, { useEffect } from "react";

import "./ClientContact.css";

const alertMessage = () => {
  var hoTen = document.getElementById("hoTen").value;
  var email = document.getElementById("email").value;
  if (hoTen == "" || email == "") {
    alert("Họ tên và email không được bỏ trống!");
  } else {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length > 0 && re.test(String(email))) {
      alert("Bạn đã đăng ký nhận thông báo thành công!");
    } else {
      alert("Vui lòng nhập địa chỉ email hợp lệ!");
    }
  }
};

export default function ClientContact() {
  return (
    <div>
      <div class="lien-he-slides"></div>
      <div class="container" style={{ margin: "80px auto" }}>
        <div class="row">
          <div class="info col-lg-6">
            <h2 class="title">
              LIÊN <span>LẠC</span>
            </h2>
            <p class="lead" style={{ marginBottom: "20px" }}>
              Chúng tôi sẵn sàng dẫn dắt bạn trong tương lai
            </p>
            <p class="phone-number">
              <span>Số điện thoại: </span>
              <a href="tel:(028) 372 51993">(028) 372 51993</a>
            </p>
            <p class="email">
              <span>Email: </span>
              <a href="mailto:phongdaotaodh@uit.edu.vn">
                phongdaotaodh@uit.edu.vn
              </a>
            </p>
            <p class="lead" style={{ marginBottom: "50px" }}>
              Khu phố 6, Phường Linh Trung, Quận Thủ Đức, TP.Hồ Chí Minh.
            </p>

            <h2 class="title mb-5">
              GIỜ <span>LÀM VIỆC</span>
            </h2>
            <h3>Dịch vụ kinh doanh:</h3>
            <p class="lead">
              Từ thứ 2 đến thứ 6: <span class="foo">24/24</span>
            </p>
            <p class="lead mb-5">
              Thứ 7, chủ nhật: <span class="foo">8.00 am - 6.00 pm</span>
            </p>

            <h3>Hỗ trợ khách hàng:</h3>

            <p class="lead">
              Từ thứ 2 đến thứ 6: <span class="foo">24/24</span>
            </p>
            <p class="lead">
              Thứ 7: <span class="foo">10.00 am - 4.00 pm</span>
            </p>
            <p class="lead">
              Chủ nhật: <span class="foo">không hỗ trợ</span>.
            </p>
          </div>
          <div class="map col-lg-6">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="600"
                  height="600"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Khu%20ph%E1%BB%91%206%2C%20P.Linh%20Trung%2C%20Q.Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.H%E1%BB%93%20Ch%C3%AD%20Minh.&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="https://www.whatismyip-address.com/divi-discount/"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid banner p-5">
        <div class="container">
          <div class="title-foot">ĐĂNG KÝ ĐỂ NHẬN THÔNG BÁO</div>
          <div class="form">
            <div class="my-row w-100" style={{ height: "auto" }}>
              <input type="text" placeholder="Họ và tên" id="hoTen" />
              <input type="text" placeholder="Số điện thoại" />
              <input type="email" placeholder="Email" id="email" />
            </div>
            <div class="row">
              <textarea name="" id="" rows="3" placeholder="Địa chỉ"></textarea>
            </div>
            <div class="w-100 d-flex justify-content-center mt-3">
              <button
                class="btn btn-outline-warning btn-lg mx-auto"
                style={{
                  padding: "10px 30px",
                  marginBottom: "30px",
                  marginTop: "10px",
                }}
                onClick={alertMessage}
              >
                GỬI ĐI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
