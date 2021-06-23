import orderDetailService from '../../services/orderDetailService'
import * as TYPE from './commentType'

export const orderReducer = async (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.CREATE: {
      const { data } = payload
      let mess = ''
      try {
        const res = await orderDetailService.create({ ...data })
        if (res.success) {
          mess = 'Đặt hàng thành công!'
        } else {
          mess = 'Đặt hàng thất bại!'
        }
        state = [...state, { ...data }]
      } catch (error) {
        console.log('error, ', error)
        mess = 'Đặt hàng thất bại!'
      }

      setTimeout(() => {
        alert(mess)
      }, 200)

      return state
    }

    default:
      return state
  }
}
