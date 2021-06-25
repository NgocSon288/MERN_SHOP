import React, {useEffect} from 'react'
import "./ClientAbout.css"
import $ from 'jquery'
export default function ClientAbout() {
  const datafor=(secFor)=>{
	$(".text-sec").removeClass("cau-noi-active");
	$("#" + secFor).addClass("cau-noi-active");
  }

  return (
    <div>
		<div>
			<img src={`http://localhost:3000/images/about/banner-bg-slogan.jpg`} alt="" className="w-100"/>
		</div>

		<h3 className="tittle-top text-center mb-lg-5 mb-sm-4 mb-3 my-title" style={{marginTop: "70px"}}>
			<span>G</span>iới&nbsp;
			<span>T</span>hiệu&nbsp;
			<span>V</span>ề&nbsp; 
			<span>C</span>húng&nbsp; 
			<span>T</span>ôi&nbsp; 
		</h3>
		<div className="sp-dien-thoai">
			<div className="container"> 
				<div className="row show-san-pham">
					<div className="col-md-5 slideanim my-left-1 mb-5 slide">
						<div className="grid">
							<figure className="effect">
								<img src={`http://localhost:3000/images/about/gioi-thieu-1.jpg`} alt="Sản phẩm điện thoại 1" className="w-100"/>
								<figcaption></figcaption>
							</figure>
						</div> 
					</div>
					<div className="col-md-5 offset-md-2 slideanim my-left-2 mb-5 slide" >
						<div className="grid">
							<figure className="effect">
								<img src={`http://localhost:3000/images/about/gioi-thieu-2.jpg`} alt="Sản phẩm điện thoại 2"  className="w-100"/>
								<figcaption></figcaption>
							</figure>
						</div> 
					</div>
					<div className="col-md-5 slideanim2 my-left-1 slide2">
						<div className="grid">
							<figure className="effect">
								<img src={`http://localhost:3000/images/about/gioi-thieu-3.jpg`} alt="Sản phẩm điện thoại 3"  className="w-100"/>
								<figcaption></figcaption>
							</figure>
						</div> 
					</div>
					<div className="col-md-5 offset-md-2 slideanim1 my-left-2 slide1">
						<div className="grid">
							<figure className="effect">
								<img src={`http://localhost:3000/images/about/gioi-thieu-4.jpg`} alt="Sản phẩm điện thoại 4" className="w-100"/>
								<figcaption></figcaption>
							</figure>
						</div> 
					</div>
				</div>
				<div className="clearfix"></div>

			</div>
		</div>
		<div className="container" style={{lineHeight: "26px"}}>
			<div className="tam-nhin row mb-5 mt-5">
				<div className="col-lg-3 col-md-3 col-sm-2 col-2 line"></div>
				<div className="col-lg-6 text text-center col-md-6 col-sm-8 col-8">
					<div style={{width: "95%",backgroundColor:"#e2bf34",textAlign: "center", margin: "auto"}}>
						Tầm nhìn & Giá trị cốt lõi
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-2 col-2 line"></div>
			</div>


			<div className="content-gioi-thieu row text-justify">
				<div className="col-md-6 left">
					<p>
						<strong>Công ty Cổ phần Đầu tư Electronic Shop (MWG)</strong> là <strong>nhà bán lẻ số 1 Việt Nam</strong> về doanh thu và lợi nhuận, với mạng lưới hơn 3.400 cửa hàng trên toàn quốc. Ngoài ra, MWG còn mở rộng ra thị trường nước ngoài với chuỗi bán lẻ thiết bị di động và điện máy tại Campuchia. Năm 2020, thành viên mới của MWG là 4KFarm ra đời với mục tiêu cung cấp cho người tiêu dùng thực phẩm an toàn theo chuẩn 4 không (không thuốc trừ sâu, không chất bảo quản, không chất tăng trưởng, không sử dụng giống biến đổi gen).
					</p>
					<ul className="my-check">
						<li><i className="fa fa-check-circle" aria-hidden="true"></i> ElectronicShop.com được thành lập từ 2004 là chuỗi bán lẻ thiết bị di động có thị phần số 1 Việt Nam với gần 1.000 siêu thị hiện diện tại 63 tỉnh thành trên khắp Việt Nam.</li>
						<li><i className="fa fa-check-circle" aria-hidden="true"></i> Electronic Shop Xanh, tiền thân là chuỗi Dienmay.com ra đời cuối 2010 và chính thức được đổi tên tháng 05/2015, là chuỗi bán lẻ các sản phẩm điện tử tiêu dùng (điện tử, điện lạnh và gia dụng) có thị phần số 1 Việt Nam với hơn 1.000 cửa hàng hiện diện tại 63 tỉnh thành trên khắp Việt Nam.</li>
						<li><i className="fa fa-check-circle" aria-hidden="true"></i> Bách Hóa Vàng được đưa vào thử nghiệm cuối năm 2015, là chuỗi cửa hàng chuyên bán lẻ thực phẩm tươi sống (thịt cá, rau củ, trái cây…) và nhu yếu phẩm với hơn 1.400 siêu thị tại TPHCM, các tỉnh Nam Bộ và Nam Trung Bộ.</li>
						<li><i className="fa fa-check-circle" aria-hidden="true"></i> Chuỗi Bigphone bán lẻ thiết bị di động được đưa vào thử nghiệm từ năm 2017 tại Campuchia là nỗ lực đầu tiên của MWG trong việc vươn ra thị trường khu vực. Tháng 12/2019, MWG ra mắt cửa hàng bán lẻ điện máy đầu tiên sau 3 năm Bigphone thâm nhập thị trường này. Hiện nay, MWG có hơn 20 cửa hàng bán lẻ điện thoại và điện máy tại Campuchia.</li>
					</ul>
					<p>MWG tập trung xây dựng dịch vụ khách hàng khác biệt với chất lượng vượt trội, phù hợp với văn hoá đặt khách hàng làm trung tâm trong mọi suy nghĩ và hành động của công ty.</p>
					<p>MWG vinh dự khi liên tiếp lọt vào bảng xếp hạng TOP 50 công ty niêm yết tốt nhất Châu Á của tạp chí uy tín <a href="javascipt:void(0)">Forbes</a> và là đại diện Việt Nam duy nhất trong Top 100 nhà bán lẻ hàng đầu Châu Á – Thái Bình Dương do Tạp chí bán lẻ châu Á (Retail Asia) và Tập đoàn nghiên cứu thị trường Euromonitor bình chọn. MWG nhiều năm liền có tên trong các bảng xếp hạng danh giá như TOP 500 nhà bán lẻ hàng đầu Châu Á – Thái Bình Dương (Retail Asia) và dẫn đầu TOP 50 công ty kinh doanh hiệu quả nhất Việt Nam (Nhịp Cầu Đầu Tư)… Sự phát triển của MWG cũng là một điển hình tốt được nghiên cứu tại các trường Đại học hàng đầu như Harvard, UC Berkeley, trường kinh doanh Tuck (Mỹ).</p>
					<p>Không chỉ là một doanh nghiệp hoạt động hiệu quả được nhìn nhận bởi nhà đầu tư và các tổ chức đánh giá chuyên nghiệp, MWG còn được người lao động tin yêu khi lần thứ 4 liên tiếp được vinh danh trong TOP 50 Doanh nghiệp có môi trường làm việc tốt nhất Việt Nam và là doanh nghiệp xuất sắc nhất tại giải thưởng Vietnam HR Awards 2018 – “Chiến lược nhân sự hiệu quả”.</p>
				</div>

				<div className="col-md-6 right">
					<h4><strong>Tầm nhìn:</strong></h4>
					<p><strong>MWG 2020</strong> là tập đoàn bán lẻ đa ngành hàng hùng mạnh nhất, có vị thế số 1 trong lĩnh vực thương
						mại điện tử.</p>
					<p>MWG liên tục cải tiến mang đến cho Khách hàng trải nghiệm thú vị và hài lòng nhất dựa trên nền tảng văn hóa đặt
						Khách Hàng làm trọng tâm và Integrity.</p>
					<p>MWG mang đến cuộc sống sung túc cho nhân viên, lợi nhuận cao cho nhà đầu tư dài hạn và đóng góp phúc lợi cho cộng
						đồng</p>
					<p><strong>Đây là những điều chúng tôi hướng đến. Đây là những điều mà bạn có thể tin tưởng vào chúng tôi.</strong>
					</p>
					<h4><strong>Cam kết của Electronic Shop</strong></h4>
					
					<p><span className="tgdd">Electronic Shop</span> cam kết đặt KHÁCH HÀNG LÀM TRUNG TÂM trong mọi suy nghĩ và hành động của mình.</p>
					<p><span className="tgdd">Electronic Shop</span> cam kết mang đến cho nhân viên một môi trường làm việc TÔN TRỌNG và CÔNG BẰNG.</p>
					<p><span className="tgdd">Electronic Shop</span> cam kết mang đến cho quản lý: Một SÂN CHƠI công bằng để thi thố tài năng / Một cam kết cho một cuộc sống cá nhân SUNG TÚC / Một vị trí xã hội được người khác KÍNH NỂ.</p>
					<p><span className="tgdd">Electronic Shop</span> cam kết mang đến cho các đối tác sự TÔN TRỌNG.</p>
					<p><span className="tgdd">Electronic Shop</span> cam kết mang đến cho nhà đầu tư giá trị doanh nghiệp GIA TĂNG KHÔNG NGỪNG.</p>
					<p><span className="tgdd">Electronic Shop</span> cam kết đóng góp cho cộng đồng thông qua việc tạo nhiều ngàn việc làm và đóng góp đầy đủ thuế cho ngân sách nhà nước</p>

					<h4><strong>Giá trị cốt lõi của nhân viên</strong></h4> 

					<ul className="my-check">
						<li><i className="fa fa-check-circle" aria-hidden="true"></i>  &nbsp;Tận tâm với Khách hàng</li>
						<li><i className="fa fa-check-circle" aria-hidden="true"></i>  &nbsp;Làm đúng cam kết và nhận trách nhiệm</li>
						<li><i className="fa fa-check-circle" aria-hidden="true"></i>  &nbsp;Yêu thương và hỗ trợ đồng đội</li>
						<li><i className="fa fa-check-circle" aria-hidden="true"></i>  &nbsp;Trung trực về tiền bạc và các mối quan hệ</li>
						<li><i className="fa fa-check-circle" aria-hidden="true"></i>  &nbsp;Máu lửa trong công việc</li>	
					</ul>
				</div>
			</div>

			<hr/>

		</div> 
		<div className="container">
			<h3 className="head-title" style={{fontSize: "36px"}}>
				Giá trị của chúng tôi
			</h3> 
			<div className="gia-tri w-100 mb-2">
				<img src={`http://localhost:3000/images/about/gia-tri.jpg`} alt=""/>
			</div>
			<div className="gia-tri-content row lead">
				<div className="gia-tri-text col-md-3">
					<span className="gia-tri-text-title">WE SERVE</span>
					<ul className="pl-0 text-justify">
						<li>Khách hàng luôn đúng</li>
						<li>Cung cấp những giá trị vượt xa sự mong đợi của khách hàng</li>
					</ul>
				</div>
				<div className="gia-tri-text col-md-3">
					<span className="gia-tri-text-title">WE ADAPT</span>
					<ul className="pl-0 text-justify">
						<li>Dự đoán những thay đổi và lập kế hoạch trước</li>
						<li>Chấp nhận những thay đổi không lường trước và chủ động trong việc thực thi</li>
					</ul>
				</div>
				<div className="gia-tri-text col-md-3">
					<span className="gia-tri-text-title">WE RUN</span>
					<ul className="pl-0 text-justify">
						<li>Tự định hướng để phát triển, không cần ai thúc đẩy</li>
						<li>Luôn khẩn trương hoàn thành công việc</li>
					</ul>
				</div>
				<div className="gia-tri-text col-md-3">
					<span className="gia-tri-text-title">WE COMMIT</span>
					<ul className="pl-0 text-justify">
						<li>Đáng tin cậy, làm những gì đã nói</li>
						<li>Nâng cao các tiêu chuẩn; không đi đường tắt ngay cả khi không có ai đang quan sát</li>
						<li>Chủ động tìm cách phát triển tổ chức</li>
					</ul>
				</div>
			</div>
			<hr/>
		</div> 
		<div className="container">
			<div className="content-cau-noi"> 
				
				<div className="our-team">OUR TEAM</div>
				<span className="dev"></span>
				
				<div className="img-sec">
					<a  style={{cursor: "pointer"}} className="team-click" data-for="sec1" onClick={()=>datafor("sec1")}><img src={`http://localhost:3000/images/about/ceo-shoppe.jpg`} className="" alt="CHRIS FENG" /></a>
					<a  style={{cursor: "pointer"}} className="team-click" data-for="sec2" onClick={()=>datafor("sec2")}><img src={`http://localhost:3000/images/about/ceo-tiki.jpg`} className="" alt="CHRIS FENG" /></a>
					<a  style={{cursor: "pointer"}} className="team-click" data-for="sec3" onClick={()=>datafor("sec3")}><img src={`http://localhost:3000/images/about/ceo-lazada.png`} className="" alt="CHRIS FENG"/></a>
				</div>
				 
				
				<div id="sec1" className="text-sec cau-noi-active">
					<span className="dev"></span>
					<h3 className="ceo-nane">CHRIS FENG</h3>
					<p>Hiểu người khác chính là chìa khóa để lãnh đạo thành công. Tại Shopee,điều quan trọng với chúng tôi là làm thế nào để mang lại trải nghiệm tốt nhất cho nhân viên, đối tác và người dùng.</p>
				</div>

				<div id="sec2" className="text-sec">
					<span className="dev"></span>
					<h3 className="ceo-nane">Trần Ngọc Thái Sơn</h3>
					<p>Khó khăn lớn nhất của TMĐT hiện nay là cạnh tranh, nếu như chỉ nhìn TMĐT là xây dựng sàn bán lẻ thì hiện nay rất nhiều đơn vị đã làm tốt. Cái mà người tiêu dùng cần hiện nay đó là những cái khác, không lặp lại những thứ mà đơn vị cũ đã làm tốt.</p>
				</div>

				<div id="sec3" className="text-sec">
					<span className="dev"></span>
					<h3 className="ceo-nane">James DONG</h3>
					<p>Tôi muốn khuyên các bạn trẻ rằng cứ thử khám phá những công việc khác nhau tại Lazada và đi tìm nguồn cảm hứng cho chính mình.</p>
				</div>
				 
			</div>
			<hr className="mt-5"/>
		</div> 
		<div className="container mb-5"> 
			<h3 className="head-title" style={{fontSize: "36px"}}>
				Văn phòng của Shop
			</h3>  

			<div className="my-city">
				<div className="d-flex justify-content-between align-items-center">
					<div className="content-city mx-5">
						<a href="javascript:void(0)" style={{textDecoration: "none"}}>
							<img src={`http://localhost:3000/images/about/icon-city-1.png`} alt=""/>
							<p className="text-center ten-city">BANGKOK</p>
						</a>
					</div>  
					<div className="content-city mx-5">
						<a href="javascript:void(0)"  style={{textDecoration: "none"}}>
							<img src={`http://localhost:3000/images/about/icon-city-2.png`} alt=""/>
							<p className="text-center ten-city">HA NOI</p>
						</a>
					</div>  
					<div className="content-city mx-5">
						<a href="javascript:void(0)" style={{textDecoration: "none"}}>
							<img src={`http://localhost:3000/images/about/icon-city-3.png`} alt=""/>
							<p className="text-center ten-city">HO CHI MINH CITY</p>
						</a>
					</div>  
					<div className="content-city mx-5">
						<a href="javascript:void(0)"  style={{textDecoration: "none"}}s>
							<img src={`http://localhost:3000/images/about/icon-city-4.png`} alt=""/>
							<p className="text-center ten-city">JAKARTA</p>
						</a>
					</div>  
				</div>
				<div className="d-flex justify-content-between align-items-center">
					<div className="content-city mx-5" >
						<a href="javascript:void(0)"style={{textDecoration: "none"}}s>
							<img src={`http://localhost:3000/images/about/icon-city-5.png`} alt=""/>
							<p className="text-center ten-city">KUALA LUMPUR</p>
						</a>
					</div>  
					<div className="content-city mx-5">
						<a href="javascript:void(0)" style={{textDecoration: "none"}}>
							<img src={`http://localhost:3000/images/about/icon-city-6.png`} alt=""/>
							<p className="text-center ten-city">MANILA</p>
						</a>
					</div>  
					<div className="content-city mx-5" >
						<a href="javascript:void(0)"style={{textDecoration: "none"}}>
							<img src={`http://localhost:3000/images/about/icon-city-7.png`} alt=""/>
							<p className="text-center ten-city">SAO PAULO</p>
						</a>
					</div>  
					<div className="content-city mx-5" >
						<a href="javascript:void(0)"style={{textDecoration: "none"}}>
							<img src={`http://localhost:3000/images/about/icon-city-8.png`} alt=""/>
							<p className="text-center ten-city">SEOUL</p>
						</a>
					</div>  
				</div>
			</div>

			<div className="w-50 mx-auto">
				<hr style={{backgroundColor: "#ee4d2d", height:"2px",marginBottom: "50px"}}/>
			</div>

			<div className="mx-auto mt-5" className="my-map">
				<div className="mapouter">
					<div className="gmap_canvas">
						<iframe width="1080" height="680" id="gmap_canvas"
							src="https://maps.google.com/maps?q=Khu%20ph%E1%BB%91%206%2C%20P.Linh%20Trung%2C%20Q.Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.H%E1%BB%93%20Ch%C3%AD%20Minh.&t=&z=15&ie=UTF8&iwloc=&output=embed"
							frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
						</iframe>
						<a href="https://daa.uit.edu.vn">daa.uit.edu.vn</a>
					</div>
				</div>
			</div>
			
		</div>
	</div>
    )
    }

