import productService from '../../services/productService'
import * as TYPE from './seenProductType'
import { LOCAL_STORAGE_SEEN_PRODUCT } from '../../common/constants'
import { element } from 'prop-types'

export const seenProductReducer = async (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.SET_SEEN_SESSIONS: {
      var res= await productService.getAll()
      var products=res.data
      var result=[]
      var seenProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SEEN_PRODUCT))
      if (seenProducts == null) {
        seenProducts = []
      }
      var length=seenProducts.length
      for(let i=0;i<length;i++){
        var pro=products.find(p=>p._id===seenProducts[i].toString())
        result.push(pro)
      }
      state=[...result]
      return state
    }
    case TYPE.ADD_TO_SEEN_PRODUCT: {
      const { _id } = payload
      //Storage
      var seenProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SEEN_PRODUCT))
      if (seenProducts == null) {
        seenProducts = []
      }
      var check= seenProducts.indexOf(_id)<0
      if(check){
        seenProducts.push(_id)
        localStorage.setItem(LOCAL_STORAGE_SEEN_PRODUCT,JSON.stringify(seenProducts))
      }
    }
    default: {
      //console.log("reducer");
    }
  }
}
