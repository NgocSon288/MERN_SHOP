import orderDetailService from '../../services/orderDetailService'
import * as TYPE from './orderDetailType'

export const orderDetailReducer = async (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.SET_ORDER_DETAILS: {
      const { orderId } = payload
      const res = await orderDetailService.getAllByOrderId(orderId)
      state = res.data

      return state
    }
    case TYPE.GET_ORDER_DETAILS_BY_USER_ID: {
      const res = await orderDetailService.getAllByUserId()
      state = res.data
      return state
    }
    case TYPE.CREATE: {
      const { data } = payload
      const res = await orderDetailService.create(data)
      state = res.data

      return state
    }

    case TYPE.DELETE_BY_ID: {
      const { _id } = payload
      try {
        const res = await orderDetailService.delete(_id)

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
