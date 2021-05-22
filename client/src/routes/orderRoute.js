// Admin
import List from '../views/order/admin/List'
import Detail from '../views/order/admin/Detail'
// import Edit from '../views/order/admin/Edit'

// Client

//  Layouts
import AdminLayout from '../layouts/AdminLayout'

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
  // Client List route
]

export default orderRoute
