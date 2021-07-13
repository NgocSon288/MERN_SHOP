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
    case TYPE.GET_ID_PRODUCT: {
      const { _id } = payload 
        const res = await commentService.getByIdProduct(_id) 
        if (!res.success) {
          return state
        }
        state=res.data
        return state
      }  
    case TYPE.CREATE: {
      const { data } = payload 
      let mess = ''
      try {
        const res = await commentService.create({ ...data })
        const req=await commentService.getByIdProduct(data.product)
        mess = res.message
        state = req.data
      } catch (error) {
        mess = error.response.data.message 
      }
      
      setTimeout(() => {
      }, 200)


      return state
    }

    default:
      return state
  }
}
