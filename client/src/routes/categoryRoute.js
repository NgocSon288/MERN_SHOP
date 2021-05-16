// Admin
import CreateCategory from '../components/category/admin/CreateCategory'
import EditCategory from '../components/category/admin/EditCategory'
import ListCategory from '../components/category/admin/ListCategory'

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
    component: ListCategory,
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
    component: CreateCategory,
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
    component: EditCategory,
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
