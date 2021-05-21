import axios from 'axios'
import { urlStr } from '../common/constants'

const brandService = {
  getAll: async () => {
    const res = await axios.get(`${urlStr}/brands`)

    return res.data
  },
  getById: async (id) => {
    const res = await axios.get(`${urlStr}/brands/${id}`)

    return res.data
  },
  create: async (brand) => {
    const fd = new FormData()
    for (const [name, value] of Object.entries(brand)) {
      fd.append(name, value)
    }

    const res = await axios.post(`${urlStr}/brands`, fd)

    return res.data
  },
  update: async (brand) => {
    try {
      const { _id } = brand 
      const fd = new FormData()
      for (const [name, value] of Object.entries(brand)) {
        fd.append(name, value)
      }

      const res = await axios.put(`${urlStr}/brands/${_id}`, fd)

      return res.data
    } catch (error) {
        console.log(error.response.data);
        return error;
    }
  },
  delete: async (id) => {
    const res = await axios.delete(`${urlStr}/brands/${id}`)

    return res.data
  },
}

export default brandService
