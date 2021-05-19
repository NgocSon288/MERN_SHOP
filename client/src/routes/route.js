import userRoute from './userRoute'
import siteRoute from './siteRoute'
import categoryRoute from './categoryRoute'
import productRoute from './productRoute'

let route = [userRoute, siteRoute, categoryRoute, productRoute]

route = route.flat()

export default route
