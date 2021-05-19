// Admin
import List from '../views/product/admin/List'
import Create from '../views/product/admin/Create'
import Edit from '../views/product/admin/Edit'

// Client

//  Layouts
import AdminLayout from './../layouts/AdminLayout'

// ContextProvider
import ProductContextProvider from '../contexts/admin/ProductContext'
import CategoryContextProvider from '../contexts/admin/CategoryContext'

const productRoute = [
  // Admin Product route
  // Admin List route
  {
    path: '/admin/product/',
    title: 'Quản trị sản phẩm',
    icon: 'design_app',
    component: List,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <ProductContextProvider>{children}</ProductContextProvider>
    ),
  },
  // Admin Create route
  {
    path: '/admin/product/create',
    title: 'Thêm mới sản phẩm',
    icon: 'design_app',
    component: Create,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <ProductContextProvider>
        <CategoryContextProvider>{children}</CategoryContextProvider>
      </ProductContextProvider>
    ),
  },
  // Admin Edit route
  {
    path: '/admin/Product/edit/:id',
    title: 'Cập nhật sản phẩm',
    icon: 'design_app',
    component: Edit,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <ProductContextProvider>
        <CategoryContextProvider>{children}</CategoryContextProvider>
      </ProductContextProvider>
    ),
  },

  //-----------------------------------------------------------------------------------------
  // Client Product route
  // Client List route
]

export default productRoute
