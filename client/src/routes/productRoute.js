// Admin
import List from "../views/product/admin/List";
import Create from "../views/product/admin/Create";
import Edit from "../views/product/admin/Edit";

// Client
import Catalogue from "../views/product/client/Products";

//  Layouts
import AdminLayout from "./../layouts/AdminLayout";
import ClientLayout from "./../layouts/ClientLayout";

// ContextProvider
// Admin
import ProductContextProvider from "../contexts/admin/ProductContext";
import CategoryContextProvider from "../contexts/admin/CategoryContext";
import BrandContextProvider from "../contexts/admin/BrandContext";
// Client
import ClientProductContextProvider from "../contexts/client/ProductContext";
import ClientCategoryContextProvider from "../contexts/client/CategoryContext";
import ClientBrandContextProvider from "../contexts/client/BrandContext";
import Detail from "../views/product/client/ProductDetail";
import ClientCommentContextProvider from "../contexts/client/commentContext";
import ClientProductSessionContextProvider from "../contexts/client/ProductSessionContext";
import SeenProductContextProvider  from '../contexts/client/SeenProductsContext'
const productRoute = [
  // Admin Product route
  // Admin List route
  {
    path: "/admin/product/",
    title: "Quản trị sản phẩm",
    icon: "design_app",
    component: List,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <ProductContextProvider>{children}</ProductContextProvider>
    ),
  },
  // Admin Create route
  {
    path: "/admin/product/create",
    title: "Thêm mới sản phẩm",
    icon: "design_app",
    component: Create,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <ProductContextProvider>
        <CategoryContextProvider>
          <BrandContextProvider>{children}</BrandContextProvider>
        </CategoryContextProvider>
      </ProductContextProvider>
    ),
  },
  // Admin Edit route
  {
    path: "/admin/Product/edit/:id",
    title: "Cập nhật sản phẩm",
    icon: "design_app",
    component: Edit,
    layout: AdminLayout,
    wrapContextProvider: ({ children }) => (
      <ProductContextProvider>
        <CategoryContextProvider>
          <BrandContextProvider>{children}</BrandContextProvider>
        </CategoryContextProvider>
      </ProductContextProvider>
    ),
  },

  //-----------------------------------------------------------------------------------------
  // Client Product route
  {
    path: "/Product/",
    title: "Cửa hàng",
    icon: "design_app",
    component: Catalogue,
    layout: ClientLayout,
    wrapContextProvider: ({ children }) => (
      <ClientProductContextProvider>
        <ClientProductSessionContextProvider>
          <ClientCategoryContextProvider>
            <ClientBrandContextProvider>{children}</ClientBrandContextProvider>
          </ClientCategoryContextProvider>
        </ClientProductSessionContextProvider>
      </ClientProductContextProvider>
    ),
  },
  {
    path: "/Product-Detail/:id",
    title: "Chi tiết sản phẩm",
    icon: "design_app",
    component: Detail,
    layout: ClientLayout,
    wrapContextProvider: ({ children }) => (
      <ClientProductContextProvider>
        <ClientProductSessionContextProvider>
        <ClientCommentContextProvider>
        <SeenProductContextProvider>{children}</SeenProductContextProvider>
          </ClientCommentContextProvider>
        </ClientProductSessionContextProvider>
      </ClientProductContextProvider>
    ),
  },
  // Client List route
];

export default productRoute;
