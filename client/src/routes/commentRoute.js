// Admin
import List from '../views/comment/admin/List'
import Create from '../views/comment/admin/Create'
import Detail from '../views/comment/admin/Detail'

// Client

//  Layouts
import AdminLayout from '../layouts/AdminLayout'

// ContextProvider
import CommentContextProvider from '../contexts/admin/CommentContext'
import ProductContextProvider from '../contexts/admin/ProductContext'

const commentRoute = [
  // Admin comment route
  // Admin List route
  {
    path: '/admin/comment/',
    title: 'Quản trị đánh giá',
    icon: 'design_app',
    component: List,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <CommentContextProvider>{children}</CommentContextProvider>
    ),
  },
  // Admin Create route
  {
    path: '/admin/comment/create',
    title: 'Thêm mới sản phẩm',
    icon: 'design_app',
    component: Create,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <CommentContextProvider>
        <ProductContextProvider>{children}</ProductContextProvider>
      </CommentContextProvider>
    ),
  },
  // Admin Edit route
  {
    path: '/admin/comment/:id',
    title: 'Chi tiết đánh giá',
    icon: 'design_app',
    component: Detail,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <CommentContextProvider> {children}</CommentContextProvider>
    ),
  },

  //-----------------------------------------------------------------------------------------
  // Client comment route
  // Client List route
]

export default commentRoute
