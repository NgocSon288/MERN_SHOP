import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBarMenu() {
  return (
    <div>
      <div className='sidebar-menu'>
        <div className='logo'>
          {' '}
          <Link to='/admin' className='sidebar-icon'>
            {' '}
            <span className='fa fa-bars'></span>{' '}
          </Link>{' '}
          <Link to='/admin'>
            <span id='logo'></span>
            {/* <img id="logo" src="./../../../assets/images/login-img.jpg" alt="Logo"/> */}
          </Link>{' '}
        </div>
        <div className='menu'>
          <ul id='menu'>
            <li>
              <Link to='/admin'>
                <i className='fa fa-tachometer'></i>
                <span>Trang chủ</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/user'>
                <i className='fa fa-user'></i>
                <span>Tài khoản</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/category'>
                <i className='fa fa-balance-scale'></i>
                <span>Loại sản phẩm</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/product'>
                <i className='fa fa-product-hunt'></i>
                <span>Sản phẩm</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/brand'>
                <i className='fa fa-bandcamp'></i>
                <span>Nhãn hiệu</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/advertisement'>
                <i className='fa fa-amazon'></i>
                <span>Slide Quảng cáo</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/order'>
                <i className='fa fa-cc-visa'></i>
                <span>Hoá đơn</span>
              </Link>
            </li>
            <li>
              <Link to='/admin/comment'>
                <i className='fa fa-comment'></i>
                <span>Đánh giá</span>
              </Link>
            </li>
            {/* <li id='menu-home'>
              <Link to='/admin'>
                <i className='fa fa-tachometer'></i>
                <span>Test one</span>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <i className='fa fa-cogs'></i>
                <span>Test many</span>
                <span
                  className='fa fa-angle-right'
                  style={{ float: 'right' }}
                ></span>
              </Link>
              <ul>
                <li>
                  <Link to='#'>Test 1.1</Link>
                </li>
                <li>
                  <Link to='#'>Test 1.2</Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}
