import React, { useEffect, useContext, useState } from "react";
import Pagination from "react-js-pagination";
import './Profile.css'
export default function Anoumane() {

    return (
    <div>
        <div class="thong-baos">

<div class="wrapper-item-gio-hang card-san-pham card-close-1">

    <div class="content-prontaie w-100">
         
        <div class="thong-tin thong-tin-1"> 
            <div class="thong-bao-head">
                <span class="ngay-thang">12/10/2020  </span>
                <i class="fa fa-bell" aria-hidden="true" style={{fontSize: "26px", color: "green"}}></i>
            </div>
            <div class="thong-bao-text">
                <p>
                    Hãy thay đổi mật khẩu thường xuyên để nâng cao bảo mật. Ngoài ra:  <br/>
                    1) Không nên sử dụng chung mật khẩu của email với mật khẩu của các tài khoản khác. <br/>
                    2) Luôn đăng xuất khỏi các tài khoản sau khi sử dụng trên thiết bị công cộng hoặc thiết bị không phải của bản thân.
                </p>
            </div>
            <a href="javascript:void(0)" class="xem-chi-tiet">Xem chi tiết</a>
        </div>

    </div>
    <button class="close" id="data-close-1">
        <span>X</span>
    </button>
</div> 

<div class="wrapper-item-gio-hang card-san-pham card-close-2">

    <div class="content-profile w-100">
         
        <div class="thong-tin thong-tin-2"> 
            <div class="thong-bao-head">
                <span class="ngay-thang">27/8/2020 </span>
                <i class="fa fa-gift" style={{fontSize: "26px", color: "blue"}}></i>
            </div>
            <div class="thong-bao-text">
                <p>
                    Apple Giảm Khủng 20% Duy Nhất Hôm Nay 30/8 - Số Lượng Có Hạn 
                </p>
            </div>
            <a href="javascript:void(0)" class="xem-chi-tiet">Xem chi tiết</a>
        </div>

    </div>
    <button class="close" id="data-close-2">
        <span>X</span>
    </button>
</div>  

<div class="wrapper-item-gio-hang card-san-pham card-close-3">

    <div class="content-profile w-100">
         
        <div class="thong-tin thong-tin-1"> 
            <div class="thong-bao-head">
                <span class="ngay-thang">27/7/2020 </span>
                <i class="fa fa-bell" aria-hidden="true" style={{fontSize: "26px", color: "green"}}></i> 
            </div>
            <div class="thong-bao-text">
                <p>
                    Để mang đến trải nghiệm tốt nhất cho khách hàng, từ ngày 29/07/17, Tiki.vn điều chỉnh tỉ lệ quy đổi Tiki Xu từ 1:5 (1000 Tiki Xu tương ứng với 5000 VNĐ) thành 1:1 (1000 Tiki Xu tương ứng với 1000 VNĐ). Số Tiki Xu của quý khách sẽ được điều chỉnh x5 để có thể sử dụng theo tỉ lệ quy đổi mới, việc điều chỉnh dự kiến sẽ hoàn tất trong ngày 27 - 28/07/2017. Do đó, từ 17h30 ngày 27/07/17 đến 23h59 ngày 28/07/17 Tiki.vn xin phép tạm ngưng tính năng sử dụng Tiki Xu để bảo trì và nâng cấp hệ thống, Tiki.vn rất tiếc về sự bất tiện này, mong quý khách thông cảm Mọi thông tin thắc mắc, quý khách vui lòng liên hệ bộ phận Chăm Sóc Khách Hàng của Tiki.vn qua email hotro@tiki.vn, hotline 1900 6035 (8h - 21h, 1000đ/ phút). Trân trọng.
                </p>
            </div>
            <a href="javascript:void(0)" class="xem-chi-tiet">Xem chi tiết</a>
        </div>

    </div>
    <button class="close" id="data-close-3">
        <span>X</span>
    </button>
</div>

<div class="wrapper-item-gio-hang card-san-pham card-close-4">

    <div class="content-profile w-100">
         
        <div class="thong-tin thong-tin-2"> 
            <div class="thong-bao-head">
                <span class="ngay-thang">19/7/2020 </span>
                <i class="fa fa-gift" style={{fontSize: "26px", color: "blue"}}></i>
            </div>
            <div class="thong-bao-text">
                <p>
                    Black Friday Sale Sốc Hàng Công Nghệ Đã Mở - Săn Ngay! 
                </p>
            </div>
            <a href="javascript:void(0)" class="xem-chi-tiet">Xem chi tiết</a>
        </div>

    </div>
    <button class="close" id="data-close-4">
        <span>X</span>
    </button>
</div>   

<div class="wrapper-item-gio-hang card-san-pham card-close-5">

    <div class="content-profile w-100">
         
        <div class="thong-tin thong-tin-2"> 
            <div class="thong-bao-head">
                <span class="ngay-thang">10/6/2020 </span>
                <i class="fa fa-gift" style={{fontSize: "26px", color: "blue"}}></i>
            </div>
            <div class="thong-bao-text">
                <p>
                    Giảm ngay 300k khi mua ĐH trên 1,500 triệu. Số lượng cực kỳ có hạn 
                </p>
            </div>
            <a href="javascript:void(0)" class="xem-chi-tiet">Xem chi tiết</a>
        </div>

    </div>
    <button class="close" id="data-close-5">
        <span>X</span>
    </button>
</div>    

<div class="wrapper-item-gio-hang card-san-pham card-close-6">

    <div class="content-profile w-100">
         
        <div class="thong-tin thong-tin-2"> 
            <div class="thong-bao-head">
                <span class="ngay-thang">14/5/2020 </span>
                <i class="fa fa-gift" style={{fontSize: "26px", color: "blue"}}></i>
            </div>
            <div class="thong-bao-text">
                <p>
                    Từ 15/5/2020, Shop miễn phí giao tiêu chuẩn cho đơn hàng từ 250k, áp dụng phí 19k cho đơn hàng dưới 250k. Thay đổi áp dụng cho khách hàng không phải là thành viên Shop.
                </p>
            </div>
            <a href="javascript:void(0)" class="xem-chi-tiet">Xem chi tiết</a>
        </div>

    </div>
    <button class="close" id="data-close-6">
        <span>X</span>
    </button>
</div>   

</div>
    </div>
  );
}
