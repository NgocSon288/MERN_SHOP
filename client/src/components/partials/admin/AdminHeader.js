import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import { AuthContext } from './../../../contexts/client/AuthContext'
import * as AUTH_TYPE from './../../../reducers/client/authType'

import './AdminHeader.css'

export default function AdminHeader() {
  const { authState, dispatch } = useContext(AuthContext)
  const [user, setUser] = useState({})

  useEffect(() => { 
    if (authState && authState.isAuthenticated) {
      setUser({ ...authState.user._doc })
    }
  }, [authState])
 
  const onLogout = (e) => {
    dispatch({
      type: AUTH_TYPE.LOGOUT,
      payload: null,
    })
  }

  return (
    <div>
      <div className='header-main'>
        <div className='header-left'>
          <div className='logo-name'>
            <a href='index.html'>
              <h1>Electronic</h1>
              {/* <img id="logo" src="./../../../../" alt="Logo"/> */}
            </a>
          </div>
          <div className='search-box'>
            <form>
              <input type='text' placeholder='Search...' required='' />
              <input type='submit' value='' />
            </form>
          </div>
          {/* <!--//end-search-box--> */}
          <div className='clearfix'> </div>
        </div>
        <div className='header-right'>
          {/* <!--notification menu end --> */}
          <div className='profile_details'>
            <ul>
              <li className='dropdown profile_details_drop'>
                <a
                  href='/'
                  className='dropdown-toggle'
                  data-toggle='dropdown'
                  aria-expanded='false'
                >
                  <div className='profile_img'>
                    <span
                      className='prfil-img'
                      style={{ width: '70px', height: '70px' }}
                    >
                      <img
                        src={`http://localhost:3000/images/user/${
                          user && user.image
                        }`}
                        alt={user && user.image}
                        width='70px'
                        height='70px'
                        style={{ borderRadius: '50%' }}
                      />{' '}
                    </span>
                    <div className='user-name'>
                      <p>{user.name}</p>
                      <span>
                        {user && user.categoryUser && user.categoryUser.name}
                      </span>
                    </div>
                    <i className='fa fa-angle-down lnr'></i>
                    <i className='fa fa-angle-up lnr'></i>
                    <div className='clearfix'></div>
                  </div>
                </a>
                <ul className='dropdown-menu drp-mnu'>
                  <li>
                    <Link to='/admin/user/profile'>
                      <i className='fa fa-user'></i> Thông tin cá nhân
                    </Link>
                  </li>
                  <li>
                    <Link to='/admin/user/account'>
                      <i className='fa fa-user'></i> Cập nhật tài khoản
                    </Link>
                  </li>
                  <li>
                    <Link to='/' onClick={(e) => onLogout(e)}>
                      <i className='fa fa-sign-out'></i> Đăng xuất
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='clearfix'> </div>
        </div>
        <div className='clearfix'> </div>
      </div>
    </div>
  )
}
