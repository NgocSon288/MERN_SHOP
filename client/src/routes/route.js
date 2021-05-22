import userRoute from './userRoute'
import siteRoute from './siteRoute'
import categoryRoute from './categoryRoute'
import productRoute from './productRoute'
import brandRoute from './brandRoute'
import advertisementRoute from './advertisementRoute'
import orderRoute from './orderRoute'

let route = [userRoute, siteRoute, categoryRoute, productRoute, brandRoute, advertisementRoute, orderRoute]

route = route.flat()

export default route
