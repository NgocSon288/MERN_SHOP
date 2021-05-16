// Admin
import CreateProduct from '../components/product/admin/CreateProduct'
import EditProduct from '../components/product/admin/EditProduct'
import ListProduct from '../components/product/admin/ListProduct'

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
    component: ListProduct,
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
    component: CreateProduct,
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
    component: EditProduct,
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
