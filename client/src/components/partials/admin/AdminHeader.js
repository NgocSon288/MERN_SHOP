import React from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

export default function AdminHeader() {
  return (
    <div>
      <div className='header-main'>
        <div className='header-left'>
          <div className='logo-name'>
            <a href='index.html'>
              <h1>Shoppy</h1>
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
                  href='#'
                  className='dropdown-toggle'
                  data-toggle='dropdown'
                  aria-expanded='false'
                  alt=''
                >
                  <div className='profile_img'>
                    <span className='prfil-img'>
                      <img src='images/p1.png' alt='' />{' '}
                    </span>
                    <div className='user-name'>
                      <p>Malorum</p>
                      <span>Administrator</span>
                    </div>
                    <i className='fa fa-angle-down lnr'></i>
                    <i className='fa fa-angle-up lnr'></i>
                    <div className='clearfix'></div>
                  </div>
                </a>
                <ul className='dropdown-menu drp-mnu'>
                  <li>
                    {' '}
                    <a href='#'>
                      <i className='fa fa-cog'></i> Settings
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a href='#'>
                      <i className='fa fa-user'></i> Profile
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a href='#'>
                      <i className='fa fa-sign-out'></i> Logout
                    </a>{' '}
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
