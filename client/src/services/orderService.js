import axios from 'axios'
import { urlStr } from '../common/constants'

const orderService = {
  getAll: async () => {
    //   return    axios.get(`${urlStr}/orders`).then(res => res.data)
    const res = await axios.get(`${urlStr}/orders`)

    return res.data
  },
  getById: async (id) => {
    const res = await axios.get(`${urlStr}/orders/${id}`)

    return res.data
  },
  delete: async (id) => {
    const res = await axios.delete(`${urlStr}/orders/${id}`)

    return res.data
  },
}

export default orderService
