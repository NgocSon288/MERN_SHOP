import React , { useEffect, useState }from 'react'
import { Button, Form, FormGroup, Label, Container,  Row, Col ,List } from 'reactstrap'
import "./ClientFooter.css";
import classNames from 'classnames'

export default function ClientFooter() {

    const [gotop, setGotop] = useState(0);
    useEffect(() => {
        const handleScroll = () =>{
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop 
            if(winScroll > 300){
                setGotop(true);
            }
            else{
                setGotop(false);
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }
    , [gotop]);
    return (
        <div>
            <div className="footer pt-4">
                    <Row>
                        <Col md="3" className="my-mb">
                            <div tag="h5" className="my-caption-f">HỖ TRỢ KHÁCH HÀNG</div>
                            <List type="unstyled"> 
                                <li>
                                    <a href="#">
                                        <strong className="text-danger" style={{textAlign: 'justify'}}>Chăm sóc khách hàng: 1900-6035 </strong> 
                                        (1000đ/phút , 8-21h kể cả T7, CN)
                                    </a>
                                </li>
                                <li><a href="#">Các câu hỏi thường gặp</a></li>
                                <li><a href="#">Gửi yêu cầu hỗ trợ</a></li>
                                <li><a href="#">Hướng dẫn đặt hàng</a></li>
                                <li><a href="#">Hướng dẫn mua trả góp</a></li>
                            </List>
                        </Col>
                        <Col md="3" className="my-mb">
                            <div tag="h5" className="my-caption-f">VỀ CHÚNG TÔI</div>
                            <List type="unstyled"> 
                                <li><a href="#">Giới thiệu</a></li>
                                <li><a href="#">Chính sách bảo mật thanh toán</a></li>
                                <li><a href="#">Chính sách bảo mật thông tin cá nhân</a></li>
                                <li><a href="#">Chính sách giải quyết khiếu nại</a></li>
                                <li><a href="#">Điều khoản sử dụng</a></li>
                                <li><a href="#">Bán hàng doanh nghiệp</a></li>
                            </List>
                        </Col>
                        <Col md="3" className="my-mb">
                            <div>
                                <span className="my-caption-f">PHƯƠNG THỨC THANH TOÁN</span>
                                <div className="cols">
                                    {['p1','p2','p3','p4','p5','p6'].map(value => { 
                                        return (<div className="cols-2">
                                            <a href="#">
                                                <img  key={value} src={(`http://localhost:3000/images/layout/${value}.png`)} 
                                                    className="my-icon-f" alt=""/>
                                            </a>
                                        </div> )})
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col md="3" className="my-mb">
                            <span className="my-caption-f">ỨNG DỤNG TRÊN ĐIỆN THOẠI</span>
                            <Row className="my-ap m-auto" xs="1">
                                <Col className="my-app-img">
                                    <a href="#" className="d-block">
                                        <img src={(`http://localhost:3000/images/layout/app1.png`)} style={{width: '200px'}} className="my-icon-f" alt=""/>
                                    </a>
                                </Col>
                                <Col className="my-app-img mt-2">
                                    <a href="#">
                                        <img src={(`http://localhost:3000/images/layout/app2.png`)} style={{width: '200px'}} className="my-icon-f" alt=""/>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div> 
            <div className="my-footer">
                <p className="my-dia-chi"><span>Địa chỉ văn phòng:</span> Khu phố 6, Phường Linh Trung, Quận Thủ Đức, TP.Hồ Chí Minh.</p>
                <p className="my-dia-chi mb-3">Nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại
                văn phòng hoặc trung tâm xử lý đơn hàng.</p>
                <Row>
                <Col className="col-6 pr-0">
                    <p className="my-copy">&#169; 2020 Design by
                        <a href="#"target="=_blank"> Kujo Jotaro </a>
                    </p>
                </Col>
                <Col className="col-6 pr-0">
                    <div>
                        <List className="social-icons" type="unstyled">
                            <li>
                                <a href="#" className="facebook" title="Facebook">
                                <i className="fab fa-facebook-f my-facebook my-icon-f" aria-hidden="true"></i> 
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter" title="Twitter">
                                    <i className="fab fa-twitter my-twitter my-icon-f" aria-hidden="true"></i> 
                                </a>
                            </li>
                            <li>
                                <a href="#" className="googleplus" title="Google">
                                    <i className="fab fa-google-plus-g my-icon-f" aria-hidden="true"></i> 
                                </a>
                            </li>
                            <li>
                                <a href="#" className="instagram wthree" title="Instagram">
                                    <i className="fab fa-instagram my-instagram my-icon-f" aria-hidden="true"></i> 
                                </a>
                            </li>
                            <li>
                                <a href="#" className="youtube" title="youtube">
                                    <i className="fab fa-youtube my-youtube my-icon-f" aria-hidden="true"></i> 
                                </a>
                            </li>
                        </List>
                    </div>
                </Col>
            </Row>
            <div className="clearfix"></div>
            </div>
            {gotop && (<a href="#" className="len-dau-trang">  
                <i className="fa fa-angle-double-up" aria-hidden="true"></i>
            </a>) }
        </div>
    )
}
