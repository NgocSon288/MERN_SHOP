import commentService from '../../services/commentService'
import * as TYPE from './commentType'

export const commentReducer = async (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.SET_COMMENTS: {
      const res = await commentService.getAll()
      state = res.data

      return state
    }

    case TYPE.DELETE_BY_ID: {
      const { _id } = payload 
      try {
        const res = await commentService.delete(_id)

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
        const res = await commentService.create({ ...data })

        mess = res.message
        state = [...state, { ...data }]
      } catch (error) {
        mess = error.response.data.message 
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
