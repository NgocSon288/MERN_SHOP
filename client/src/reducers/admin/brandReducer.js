import brandService from '../../services/brandService'
import * as TYPE from './brandType'

export const brandReducer = async (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.SET_BRANDS: {
      const res = await brandService.getAll()
      state = res.data

      return state
    }

    case TYPE.EDIT_BY_ID: {
      try {
        const { brand } = payload 
        const res = await brandService.update(brand)

        setTimeout(() => {
          alert(res.message)
        }, 200)
      } catch (error) {
        setTimeout(() => {
          alert(error.message)
        }, 200)
      }
      return state
    }

    case TYPE.DELETE_BY_ID: {
      const { _id } = payload
      try {
        const res = await brandService.delete(_id)

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

    case TYPE.CREATE: {
      const { brand } = payload
      try {
        const res = await brandService.create(brand)

        setTimeout(() => {
          alert(res.message)
        }, 200)
      } catch (error) {
        setTimeout(() => {
          alert(error.message)
        }, 200)
      }

      state = [...state, { ...brand }]

      return state
    }

    default:
      return state
  }
}
