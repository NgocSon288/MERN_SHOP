import axios from 'axios'
import { urlStr } from '../common/constants'

const productService = {
  getAll: async () => {
    const res = await axios.get(`${urlStr}/products`)
    return res.data
  },
  getById: async (id) => {
    const res = await axios.get(`${urlStr}/products/${id}`)

    return res.data
  },
  create: async (product) => {
    const fd = new FormData()
    for (const [name, value] of Object.entries(product)) {
      if (name === 'category' || name === 'brand') {
        fd.append(name, value._id)
      } else if (name === 'parameter') {
        fd.append(name, JSON.stringify(value))
      } else if (name === 'fileUpload') {
        // eslint-disable-next-line no-loop-func
        ;[...value].forEach((it, i) => {
          fd.append(name + (i + 1), it.val)
        })
      } else {
        fd.append(name, value)
      }
    }

    const res = await axios.post(`${urlStr}/products`, fd) 
    return res.data
  },
  update: async (product) => {
    const fd = new FormData()
    for (const [name, value] of Object.entries(product)) {
      if (name === 'category' || name === 'brand') {
        fd.append(name, value._id)
      } else if (name === 'parameter') {
        fd.append(name, JSON.stringify(value))
      } else if (name === 'fileUpload') {
        // eslint-disable-next-line no-loop-func
        ;[...value].forEach((it, i) => {
          fd.append(name + (i + 1), it.val)
        })
      } else {
        fd.append(name, value)
      }
    }
    const res = await axios.put(`${urlStr}/products/${product._id}`, fd)

    return res.data
  },
  delete: async (id) => {
    const res = await axios.delete(`${urlStr}/products/${id}`)

    return res.data
  },
}

export default productService
