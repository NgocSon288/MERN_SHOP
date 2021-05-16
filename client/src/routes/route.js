import siteRoute from './siteRoute'
import categoryRoute from './categoryRoute'
import productRoute from './productRoute'

let route = [  
  siteRoute,
  categoryRoute,
  productRoute,
]

route = route.flat()


export default route
