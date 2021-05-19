import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import route from './routes/route'
import AuthContextProvider from './contexts/client/AuthContext'

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
      <AuthContextProvider>
        <Layout>
          {WrapContextProvider && (
            <WrapContextProvider>
              <Component {...props} title={title}></Component>
            </WrapContextProvider>
          )}
          {!WrapContextProvider && (
            <Component {...props} title={title}></Component>
          )}
        </Layout>
      </AuthContextProvider>
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
