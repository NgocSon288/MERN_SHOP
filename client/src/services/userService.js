import axios from 'axios'
import { urlStr } from '../common/constants'

const accountService = {
  getAll: async () => {
    //   return    axios.get(`${urlStr}/users`).then(res => res.data)
    const res = await axios.get(`${urlStr}/users`)

    return res.data
  },
  getById: async (id) => {
    const res = await axios.get(`${urlStr}/users/${id}`)

    return res.data
  },
  checkAuth: async (id) => {
    const res = await axios.get(`${urlStr}/users/auth`)

    return res.data
  },
  login: async (account) => {
    const res = await axios.post(`${urlStr}/users/login`, account)

    return res.data
  },
  create: async (account) => {
    const fd = new FormData()
    for (const [name, value] of Object.entries(account)) {
      fd.append(name, value)
    }

    const res = await axios.post(`${urlStr}/users`, fd)

    return res.data
  },
  update: async (account) => {
    const fd = new FormData()
    for (const [name, value] of Object.entries(account)) {
      fd.append(name, value)
    }

    const res = await axios.put(`${urlStr}/users/`, fd)

    return res.data
  },
  updateAccount: async (account) => { 
    const res = await axios.put(`${urlStr}/users/account`, account)

    return res.data
  },
  updatePermission: async (_id) => {
    const res = await axios.put(`${urlStr}/users/permission/${_id}`)
    return res.data
  },
  delete: async (id) => {
    const res = await axios.delete(`${urlStr}/users/${id}`) // urlStr: localhost://3000/api/users/1873568172631923

    return res.data
  },
}

export default accountService
