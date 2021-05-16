import productService from '../../services/productService'
import * as TYPE from './productType'

export const productReducer = async (state, action) => { 
  const { type, payload } = action

  switch (type) {
    case TYPE.SET_PRODUCTS: {
      const res = await productService.getAll() 
      state = res.data

      return state
    }

    case TYPE.EDIT_BY_ID: {
      try {
        const { product } = payload
        const res = await productService.update(product)

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
      const { id } = payload
      try {
        const res = await productService.delete(id)

        setTimeout(() => {
          alert(res.message)
        }, 200)
      } catch (error) {
        setTimeout(() => {
          alert(error.message)
        }, 200)
      }
      
      state = state.filter((item) => item._id !== id)

      return state
    }

    case TYPE.CREATE: { 
      const { product } = payload 
      try {
        const res = await productService.create(product)

        
        setTimeout(() => {
          alert(res.message)
        }, 200)
      } catch (error) {
        setTimeout(() => {
          alert(error.message)
        }, 200)
      }

      state = [...state, { ...product }]

      return state
    }

    default:
      return state
  }
}
