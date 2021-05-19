// Admin
import List from '../views/category/admin/List' 
import Create from '../views/category/admin/Create' 
import Edit from '../views/category/admin/Edit' 

// Client

//  Layouts
import AdminLayout from './../layouts/AdminLayout'

// ContextProvider
import CategoryContextProvider from '../contexts/admin/CategoryContext'

const categoryRoute = [
  // Admin Category route
  // Admin List route
  {
    path: '/admin/category/',
    title: 'Quản trị loại sản phẩm',
    icon: 'design_app',
    component: List,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <CategoryContextProvider>{children}</CategoryContextProvider>
    ),
  },
  // Admin Create route
  {
    path: '/admin/category/create',
    title: 'Thêm mới loại sản phẩm',
    icon: 'design_app',
    component: Create,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <CategoryContextProvider>{children}</CategoryContextProvider>
    ),
  },
  // Admin Edit route
  {
    path: '/admin/category/edit/:id',
    title: 'Cập nhật loại sản phẩm',
    icon: 'design_app',
    component: Edit,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <CategoryContextProvider>{children}</CategoryContextProvider>
    ),
  },

  //-----------------------------------------------------------------------------------------
  // Client Category route
  // Client List route
]

export default categoryRoute
