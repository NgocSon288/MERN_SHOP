import React, { createContext, useEffect } from 'react'

import { commentReducer } from '../../reducers/admin/commentReducer'
import useAsyncReducer from '../../reducers/useAsyncReducer' //  dùng để gọi async function
import * as COMMENT_TYPE from '../../reducers/admin/commentType'

export const CommentContext = createContext()

export default function ProductContextProvider({ children }) {
  const [comments, dispatch] = useAsyncReducer(commentReducer, [])

  useEffect(() => {
    dispatch({
      type: COMMENT_TYPE.SET_COMMENTS,
      payload: null,
    })
  }, [])

  const commentContextData = {
    comments,
    dispatch,
  }

  return (
    <CommentContext.Provider value={commentContextData}>
      {children}
    </CommentContext.Provider>
  )
}
