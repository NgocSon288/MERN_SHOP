// Admin
import List from '../views/order/admin/List'
import Detail from '../views/order/admin/Detail'
// import Edit from '../views/order/admin/Edit'

// Client
import Card from './../views/order/client/Card'

//  Layouts
import AdminLayout from '../layouts/AdminLayout'
import ClientLayout from '../layouts/ClientLayout'

// ContextProvider
import OrderContextProvider from '../contexts/admin/OrderContext'
import OrderDetailContextProvider from '../contexts/admin/OrderDetailContext'

const orderRoute = [
  // Admin Category route
  // Admin List route
  {
    path: '/admin/order/',
    title: 'Quản trị hoá đơn',
    icon: 'design_app',
    component: List,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <OrderContextProvider>{children}</OrderContextProvider>
    ),
  },

  // Admin Detail route
  {
    path: '/admin/order/:orderId',
    title: 'Chi tiết hoá đơn',
    icon: 'design_app',
    component: Detail,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <OrderContextProvider>
        <OrderDetailContextProvider>{children}</OrderDetailContextProvider>
      </OrderContextProvider>
    ),
  },

  //-----------------------------------------------------------------------------------------
  // Client Category route
  // Client List card item route 
  {
    path: '/order',
    title: 'Danh sách các sản phẩm giỏ hàng',
    icon: 'design_app',
    component: Card,
    layout: ClientLayout,
    wrapContextProvider: null,
  },
]

export default orderRoute
