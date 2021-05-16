import React from 'react' 
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

export default function ClientHeader() {
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
           </Nav>
         </Collapse>
       </Navbar>
     </div>
   )
}
