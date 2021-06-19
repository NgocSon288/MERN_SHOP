// Admin
// import AdminHome from '../components/sites/admin/AdminHome'
import  AdminHome from './../views/sites/admin/Home'

// Client
import ClientAbout from '../views/sites/client/About'
import ClientHome from '../views/sites/client/Home'
import ClientContact from '../views/sites/client/Contact' 

//  Layouts
import AdminLayout from './../layouts/AdminLayout'
import ClientLayout from './../layouts/ClientLayout'

// ContextProvider  

const route = [
  // Admin Sites route
   

  //-----------------------------------------------------------------------------------------
  // Client Sites route
  // Client Home route
  {
    path: '/',
    title: 'Trang chủ',
    icon: 'design_app',
    component: ClientHome,
    layout: ClientLayout,
    wrapContextProvider: null
  },

  // Client About route
  {
    path: '/about',
    title: 'Trang giới thiệu',
    icon: 'design_app',
    component: ClientAbout,
    layout: ClientLayout,
    wrapContextProvider: null,
  },

  // Client Contact route
  {
    path: '/contact',
    title: 'Trang liên hệ',
    icon: 'design_app',
    component: ClientContact,
    layout: ClientLayout,
    wrapContextProvider: null,
  },
]

export default route
