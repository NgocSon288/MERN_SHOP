// Admin
import List from '../views/advertisement/admin/List'
import Create from '../views/advertisement/admin/Create'
import Edit from '../views/advertisement/admin/Edit'

// Client

//  Layouts
import AdminLayout from '../layouts/AdminLayout'

// ContextProvider
import AdvertisementContextProvider from '../contexts/admin/AdvertisementContext'

const advertisementRoute = [
  // Admin advertisement route
  // Admin List route
  {
    path: '/admin/advertisement/',  // dường dẫn truy cập
    title: 'Quản trị slide quảng cáo',  // title thể hiện của một view
    icon: 'design_app',
    component: List, // list: trang danh sách nằm trong thư mục views
    layout: AdminLayout, // sử dụng layout của admin
    wrapContextProvider: ({ children }) => (
      <AdvertisementContextProvider>{children}</AdvertisementContextProvider>
    ), // dùng 1 context AdvertisementContextProvider, nếu dùng nhiều context thì tham khảo file productRoute
  },
  // Admin Create route
  {
    path: '/admin/advertisement/create',
    title: 'Thêm mới slide quảng cáo',
    icon: 'design_app',
    component: Create,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <AdvertisementContextProvider>{children}</AdvertisementContextProvider>
    ),
  },
  // Admin Edit route
  {
    path: '/admin/advertisement/edit/:id',
    title: 'Cập nhật slide quảng cáo',
    icon: 'design_app',
    component: Edit,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <AdvertisementContextProvider>{children}</AdvertisementContextProvider>
    ),
  },

  //-----------------------------------------------------------------------------------------
  // Client advertisement route
  // Client List route
]

export default advertisementRoute
