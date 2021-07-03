import axios from 'axios'
import { urlStr } from '../common/constants'

const commentService = {
  getAll: async () => {
    const res = await axios.get(`${urlStr}/comments`)
    return res.data
  },
  getById: async (id) => {
    const res = await axios.get(`${urlStr}/comments/${id}`)

    return res.data
  },
  getByIdProduct: async (productid) => {
    const res = await axios.get(`${urlStr}/comments/product/${productid}`)

    return res.data
  },
  create: async (product) => { 
    const fd = new FormData()
    for (const [name, value] of Object.entries(product)) {
      if (name === 'fileUpload' && value) {
        // eslint-disable-next-line no-loop-func
        ;[...value].forEach((it, i) => {
          fd.append(name + (i + 1), it.val)
        })
      } else {
        fd.append(name, value)
      }
    }
    const res = await axios.post(`${urlStr}/comments`, fd)
    return res.data
  },
  delete: async (id) => { 
    const res = await axios.delete(`${urlStr}/comments/${id}`)

    return res.data
  },
}

export default commentService
