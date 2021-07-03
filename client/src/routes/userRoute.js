// Admin
import List from './../views/user/admin/List'
import Profile from './../views/user/admin/Profile'
import EditAccount from './../views/user/admin/EditAccount'

// Client
import Login from '../views/user/client/Login'
import Register from '../views/user/client/Register'
import ProfileClient from './../views/user/client/Profile'
//  Layouts
import AdminLayout from './../layouts/AdminLayout'

// ContextProvider
import AuthContextProvider from './../contexts/client/AuthContext'
import UserContextProvider from './../contexts/admin/UserContext'
import UserContextProviderClient from './../contexts/client/UserContext'
import ClientLayout from './../layouts/ClientLayout'
import OrderContextProvider from '../contexts/admin/OrderContext'
import OrderDetailContextProvider from '../contexts/admin/OrderDetailContext'
import SeenProductContextProvider  from '../contexts/client/SeenProductsContext'
import ClientProductSessionContextProvider from "../contexts/client/ProductSessionContext";
const userRoute = [
  // Client User route
  {
    path: '/user/Profile',
    title: 'Thông tin khách hàng',
    icon: 'design_app',
    component: ProfileClient,
    layout: ClientLayout,
    wrapContextProvider: ({ children }) => (
      <UserContextProviderClient>
        <OrderContextProvider>
          <OrderDetailContextProvider>
            <SeenProductContextProvider>
              <ClientProductSessionContextProvider>
                {children}
              </ClientProductSessionContextProvider>
            </SeenProductContextProvider>
          </OrderDetailContextProvider>
        </OrderContextProvider>
      </UserContextProviderClient>
    ),
  },
  // Client Login route
  {
    path: '/account/login',
    title: 'Trang đăng nhập',
    icon: 'design_app',
    component: Login,
    layout: ({ children }) => <>{children}</>,
    wrapContextProvider: ({ children }) => (
      <AuthContextProvider>{children}</AuthContextProvider>
    ),
  },

  // Client Register route
  {
    path: '/account/register',
    title: 'Trang đăng ký',
    icon: 'design_app',
    component: Register,
    layout: ({ children }) => <>{children}</>,
    wrapContextProvider: ({ children }) => (
      <AuthContextProvider>{children}</AuthContextProvider>
    ),
  },

  //-----------------------------------------------------------------------------------------
  // Admin User route
  // Admin List route
  {
    path: '/admin/user',
    title: 'Quản lý người dừng',
    icon: 'design_app',
    component: List,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <AuthContextProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </AuthContextProvider>
    ),
  },
  // Admin Edit route
  {
    path: '/admin/user/profile',
    title: 'Thông tin cá nhân',
    icon: 'design_app',
    component: Profile,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <AuthContextProvider>{children}</AuthContextProvider>
    ),
  },
  // Admin Edit Account route
  {
    path: '/admin/user/account',
    title: 'Cập nhật tài khoản',
    icon: 'design_app',
    component: EditAccount,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <UserContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </UserContextProvider>
    ),
  },
]

export default userRoute
