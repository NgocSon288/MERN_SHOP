import orderService from '../../services/orderService'
import * as TYPE from './orderType'

export const orderReducer = async (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.SET_ORDERS: {
      const res = await orderService.getAll()
      state = res.data
      return state
    }

    case TYPE.DELETE_BY_ID: {
      const { _id } = payload
      try {
        const res = await orderService.delete(_id)

        setTimeout(() => {
          alert(res.message)
        }, 200)
      } catch (error) {
        setTimeout(() => {
          alert(error.message)
        }, 200)
      }

      state = state.filter((item) => item._id !== _id)

      return state
    }

    default:
      return state
  }
}
