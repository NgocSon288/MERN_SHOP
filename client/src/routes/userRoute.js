// Admin
import List from './../views/user/admin/List'
import Profile from './../views/user/admin/Profile'

// Client
import Login from '../views/user/client/Login'
import Register from '../views/user/client/Register'

//  Layouts
import AdminLayout from './../layouts/AdminLayout'

// ContextProvider
import AuthContextProvider from './../contexts/client/AuthContext'
import UserContextProvider from './../contexts/admin/UserContext'

const userRoute = [
  // Client User route
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
      <AuthContextProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </AuthContextProvider>
    ),
  },
]

export default userRoute
