import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import route from './routes/route' 

// const RenderContextProvider = ({ ListContextProvider, children }) => {
//   if (!ListContextProvider || ListContextProvider.length === 0) {
//     return children
//   }
//   const d = ListContextProvider.length
//   const ItemContextProvider = ListContextProvider[0]
//   ListContextProvider.shift()
//   let code = null
//   if (d > 1) {
//     code = (
//       <ItemContextProvider>
//         <RenderContextProvider ListContextProvider={ListContextProvider}>
//           {children}
//         </RenderContextProvider>
//       </ItemContextProvider>
//     )
//   } else if (d === 1) {
//     code = <ItemContextProvider>{children}</ItemContextProvider>
//   }
//   return code
// }

const AppRoute = ({
  component: Component,
  layout: Layout,
  wrapContextProvider: WrapContextProvider,
  title,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        {/* <RenderContextProvider ListContextProvider={ListContextProvider}> */}
        {/* <CategoryContextProvider> */}
        {WrapContextProvider && (
          <WrapContextProvider>
            <Component {...props} title={title}></Component>
          </WrapContextProvider>
        )}
        {!WrapContextProvider && (
          <Component {...props} title={title}></Component>
        )}
        {/* </CategoryContextProvider> */}
        {/* </RenderContextProvider> */}
      </Layout>
    )}
  ></Route>
)

function App() {
  return (
    <Router>
      <Switch>
        {route.map(
          ({ path, layout, component, title, wrapContextProvider }, i) => (
            <AppRoute
              path={path}
              exact
              layout={layout}
              component={component}
              title={title}
              wrapContextProvider={wrapContextProvider}
              key={i}
            />
          )
        )}
      </Switch>
    </Router>
  )
}

export default App
