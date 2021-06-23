import React from 'react'
import { Link } from 'react-router-dom'

import './AdminSideBarMenu.css'

export default function SideBarMenu() {
  return (
    <div>
      <div className='sidebar-menu'>
        <div className='logo2'>
          <img
            src='http://localhost:3000/images/layout/logo.png'
            alt='Logo'
            width='100%'
            height='100%'
          />
        </div>
        <div className='menu'>
          <ul id='menu'>
            <li>
              <Link to='/admin/user' className='menu-item'>
                <i className='fa fa-user my-icon'></i>
                <span>Tài khoản</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/category' className='menu-item'>
                <i className='fa fa-balance-scale my-icon'></i>
                <span>Loại sản phẩm</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/product' className='menu-item'>
                <i className='fab fa-airbnb my-icon'></i>
                <span>Sản phẩm</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/brand' className='menu-item'>
                <i className='fas fa-apple-alt my-icon'></i>
                <span>Nhãn hiệu</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/advertisement' className='menu-item'>
                <i className='fas fa-ad my-icon'></i>
                <span>Slide Quảng cáo</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/order' className='menu-item'>
                <i className='fab fa-amazon-pay my-icon'></i>
                <span>Hoá đơn</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/comment' className='menu-item'>
                <i className='fa fa-comment my-icon'></i>
                <span>Đánh giá</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
