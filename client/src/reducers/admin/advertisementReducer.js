import advertisementService from '../../services/advertisementService'
import * as TYPE from './advertisementType'

export const advertisementReducer = async (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.SET_ADVERTISEMENTS: {
      const res = await advertisementService.getAll()
      state = res.data

      return state
    }

    case TYPE.EDIT_BY_ID: {
      try {
        const { advertisement } = payload 
        const res = await advertisementService.update(advertisement)

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
        const res = await advertisementService.delete(_id)

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
      const { advertisement } = payload
      try {
        const res = await advertisementService.create(advertisement)

        setTimeout(() => {
          alert(res.message)
        }, 200)
      } catch (error) {
        setTimeout(() => {
          alert(error.message)
        }, 200)
      }

      state = [...state, { ...advertisement }]

      return state
    }

    default:
      return state
  }
}
