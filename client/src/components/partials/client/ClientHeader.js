import React, { useContext, useEffect ,useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter,List } from 'reactstrap'
import "./ClientHeader.css";

import { AuthContext } from './../../../contexts/client/AuthContext'
import * as AUTH_TYPE from './../../../reducers/client/authType'

export default function ClientHeader() {
  const { authState, dispatch } = useContext(AuthContext)
  
  useEffect(() => {
    dispatch({
      type: AUTH_TYPE.SET_AUTH,
      payload: null,
    })
  }, [])

  useEffect(() => {}, [authState])
  const onLogout = (e) => {
    e.preventDefault()
    
    dispatch({
      type: AUTH_TYPE.LOGOUT,
      payload: null,
    })
  
  }
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <div className="my-head">
      <Navbar className="container d-flex justify-content-start align-items-start my-header">
        <NavbarBrand>
          <Link to='/'>
            <img src={(`http://localhost:3000/images/layout/logo.png`)} alt="Logo" className="my-logo"/>
          </Link>
        </NavbarBrand>
        <NavItem className='mr-auto' navbar>
          <form action="" className="d-inline-block my-form">
            <div className="search row my-row">
              <input type="text" placeholder="Bạn tìm gì..." className="my-search-text col-10"/>
              <a className="btn btn-outline-primary col-2 my-search-button" style={{height: '40px'}}>
                <i className="fa fa-search"/>
              </a>
            </div>
          </form>
        </NavItem>
        <Nav className="my-header-right d-flex justify-content-center align-items-center">  
          {!authState.isAuthenticated && (
            <NavItem>
              <Link className='ml-5 my-login-header my-active pr-2' to='/account/login'>
                <strong>Login</strong>
              </Link>
            </NavItem>
          )}
          {authState.isAuthenticated && (
            <NavItem>
              <div>
                <a href="#" class="ml-5 my-header-right-item my-header-right-item2 my-active">
                  <strong>{authState.user && 'Xin chào ' + authState.user._doc.name}</strong>
                </a>  
                <a href="#" class="ml-2 mt-5 my-header-right-item my-header-right-item2 my-user-responsive">
                  <span style={{width: '40px', top: '25px', position: 'absolute', borderRadius: '50%'}} ></span>
                </a>
              </div>
            </NavItem>      
          )}
          {authState.isAuthenticated && (
            <NavItem> 
              <div>
                <span onClick={toggle} class="ml-5 my-header-right-item my-header-right-item2 my-res-a my-active my-logout-header">
                  <strong>Đăng xuất</strong>
                </span>
                <span onClick={toggle} class="ml-2 mt-5 my-header-right-item my-header-right-item2 my-res-a my-user-responsive my-logout-header" >
                  <img src={(`http://localhost:3000/images/layout/user-s-logout.png`)} alt="" class="ml-1" style={{width: '40px',top: '25px', position: 'absolute'}}/>
                </span>
                <Modal isOpen={modal} toggle={toggle} >
                  <ModalHeader toggle={toggle}>Thông báo</ModalHeader>
                  <ModalBody>
                    Bạn có chắc muốn đăng xuất.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle, (e) => onLogout(e)}>Đăng xuất</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Hủy</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </NavItem>     
          )}
          <NavItem>
            <Link to='/order' className="ml-5 my-header-right-item my-giohang my-lg">
              <i className="fa fa-cart-arrow-down" aria-hidden="true" style={{marginRight: '7px'}}></i>
              Giỏ hàng
              <span className="badge badge-danger my-no">4</span>
            </Link>
            <Link to='/order' className="ml-2 my-header-right-item my-giohang my-sm my-res-a" style={{marginRight: '15px'}}>
              <i className="fa fa-cart-arrow-down" aria-hidden="true" style={{marginRight: '4px'}}></i> 
              <span className="badge badge-danger my-no">4</span>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
      <Navbar className="md-flex justify-content-center align-items-center Navigation ml-auto mr-auto" style={{paddingTop:'0px'}}>
          <List className="my-nav d-flex justify-content-center my-nav-temp mb-2" id="my-navs">
            <li className="my-active">
              <Link to='/'>TRANG CHỦ</Link>
            </li> 
            <li className="my-parent-2">
              <Link to='/Product/'>SẢN PHẨM <span></span></Link>
              <div className="my-dropdow">
                <List>
                  <li>
                    <Link to='/Product/' className="li2">ĐIỆN THOẠI</Link>
                  </li>
                  <li>
                    <Link to='/Product/' className="li2">LAPTOP</Link>
                  </li>
                  <li>
                    <Link to='/Product/' className="li2">TABLET</Link>
                  </li>
                  <li>
                    <Link to='/Product/' className="li2">SMART WATCH</Link>
                  </li>
                </List>
              </div>
            </li>
            <li className="my-parent-2">
              <Link to='/Product/'>PHỤ KIỆN</Link>
              <div className="my-dropdow">
                <List>
                  <li>
                    <Link to='/Product/'className="li2">PHỤ KIỆN ĐIỆN THOẠI</Link>
                  </li>
                  <li>
                    <Link to='/Product/' className="li2">PHỤ KIỆN LAPTOP</Link>
                  </li>
                  <li>
                    <Link to='/Product/' className="li2">PHỤ KIỆN TABLET</Link>
                  </li>
                  <li>
                    <Link to='/Product/' className="li2">PHỤ KIỆN SMART WATCH</Link>
                  </li>
                </List>
              </div>
            </li>
            <li>
              <Link to='/about'>GIỚI THIỆU</Link>
            </li>
            <li>
              <Link to='/contact'>LIÊN HỆ</Link>
            </li>
          </List>
          <a href="javascript:void(0);" style={{fontSize : '50px'}} className="icon" id="btn-toggle">&#9776;</a>
        </Navbar>
    </div>
  )
}

