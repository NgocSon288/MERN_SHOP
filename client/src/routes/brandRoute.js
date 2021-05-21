// Admin
import List from '../views/brand/admin/List'
import Create from '../views/brand/admin/Create'
import Edit from '../views/brand/admin/Edit'

// Client

//  Layouts
import AdminLayout from '../layouts/AdminLayout'

// ContextProvider
import BrandContextProvider from '../contexts/admin/BrandContext'

const brandRoute = [
  // Admin brand route
  // Admin List route
  {
    path: '/admin/brand/',
    title: 'Quản trị nhãn hiệu',
    icon: 'design_app',
    component: List,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <BrandContextProvider>{children}</BrandContextProvider>
    ),
  },
  // Admin Create route
  {
    path: '/admin/brand/create',
    title: 'Thêm mới nhãn hiệu',
    icon: 'design_app',
    component: Create,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <BrandContextProvider>{children}</BrandContextProvider>
    ),
  },
  // Admin Edit route
  {
    path: '/admin/brand/edit/:id',
    title: 'Cập nhật nhãn hiệu',
    icon: 'design_app',
    component: Edit,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <BrandContextProvider>{children}</BrandContextProvider>
    ),
  },

  //-----------------------------------------------------------------------------------------
  // Client brand route
  // Client List route
]

export default brandRoute
