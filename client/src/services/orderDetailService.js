import axios from 'axios'
import { urlStr } from '../common/constants'

const orderDetailService = {
  getAllByOrderId: async (orderId) => {
    const res = await axios.get(`${urlStr}/orderdetails/${orderId}`)

    return res.data
  }, 
  getAllByUserId: async () => {
    const res = await axios.get(`${urlStr}/orderdetails/`)
    return res.data
  },
  create: async (data) => {
    const res = await axios.post(`${urlStr}/orderdetails/`, data)

    return res.data
  },
  delete: async (id) => {
    const res = await axios.delete(`${urlStr}/orderdetails/${id}`)

    return res.data
  },
}

export default orderDetailService
