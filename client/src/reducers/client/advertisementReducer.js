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

    default:
      return state
  }
}
