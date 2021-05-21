import userRoute from './userRoute'
import siteRoute from './siteRoute'
import categoryRoute from './categoryRoute'
import productRoute from './productRoute'
import brandRoute from './brandRoute'

let route = [userRoute, siteRoute, categoryRoute, productRoute, brandRoute]

route = route.flat()

export default route
