import categoryService from '../../services/categoryService'
import * as TYPE from './categoryType'

export const categoryReducer = async (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.SET_CATEGORIES: {
      const res = await categoryService.getAll()
      state = res.data

      return state
    }

    case TYPE.EDIT_BY_ID: {
      const { data } = payload
      let mess = ''
      try {
        const res = await categoryService.update({ ...data })
        mess = res.message
        // state = [...state, { ...data }]
        const item = state.find((ite) => ite._id === data._id)
        item.name = data.name
        item.description = data.description 
        
      } catch (error) {
        mess = error.message
      }

      setTimeout(() => {
        alert(mess)
      }, 200)

      return state
    }

    case TYPE.DELETE_BY_ID: {
      const { _id } = payload
      try {
        // Gọi API xoá Category ở phía server
        const res = await categoryService.delete(_id)

        if (!res.success) {
          console.log(res.message)
          return state
        }

        setTimeout(() => {
          alert(res.message)
        }, 200)
        state = state.filter((item) => item._id !== _id)
      } catch (error) {
        alert(error.message)
      }
      return state
    }

    case TYPE.CREATE: {
      const { data } = payload
      let mess = ''
      try {
        const res = await categoryService.create({ ...data })

        mess = res.message
        state = [...state, { ...data }]
      } catch (error) {
        mess = error.message
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
