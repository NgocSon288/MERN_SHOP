import React, { useContext, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

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
  return (
    <div>
      <Navbar color='dark' light expand='md'>
        <NavbarBrand>
          <Link to='/'>Home</Link>
        </NavbarBrand>
        <Collapse navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link to='/about'>About</Link>
            </NavItem>
            <NavItem>
              <Link className='pl-4' to='/contact'>
                Contact
              </Link>
            </NavItem>
            {!authState.isAuthenticated && (
              <NavItem>
                <Link className='pl-4' to='/account/login'>
                  Login
                </Link>
              </NavItem>
            )}
            {authState.isAuthenticated && (
              <NavItem>
                <a className='pl-4' href='/' onClick={(e) => onLogout(e)}>
                  {authState.user && 'Xin chào ' + authState.user._doc.name}
                </a>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
