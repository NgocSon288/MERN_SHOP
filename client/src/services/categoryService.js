import axios from 'axios'
import { urlStr } from '../common/constants'

const categoryService = {
  testAPI: async () => {
    //   axios.get(`${urlStr}/Test`).then(res => res.data)
    const res = await axios.get(`${urlStr}/Test`)

    return res.data
  },
  getAll: async () => {
    //   return    axios.get(`${urlStr}/categories`).then(res => res.data)
    const res = await axios.get(`${urlStr}/categories`)

    return res.data
  },
  getById: async (id) => {
    const res = await axios.get(`${urlStr}/categories/${id}`)

    return res.data
  },
  create: async (category) => { 
    const res = await axios.post(`${urlStr}/categories`, category)

    return res.data
  },
  update: async (category) => {
    const { _id } = category
    const res = await axios.put(`${urlStr}/categories/${_id}`, category)

    return res.data
  },
  delete: async (id) => {
    const res = await axios.delete(`${urlStr}/categories/${id}`) // urlStr: localhost://3000/api/categories/1873568172631923

    return res.data
  },
}

export default categoryService
