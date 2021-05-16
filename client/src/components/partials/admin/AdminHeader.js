import React from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

export default function AdminHeader() {
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand>
          <Link to='/admin'>Home</Link>
        </NavbarBrand>
        <Collapse navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link to='/admin/category'>Category</Link>
            </NavItem>
            <NavItem>
              <Link className='pl-4' to='/admin/product'>
                Product
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
