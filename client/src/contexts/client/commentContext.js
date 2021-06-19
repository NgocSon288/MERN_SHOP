import React, { createContext, useEffect } from 'react'

import { commentReducer } from '../../reducers/client/commentReducer'
import useAsyncReducer from '../../reducers/useAsyncReducer' //  dùng để gọi async function
import * as COMMENT_TYPE from '../../reducers/client/commentType'

export const CommentContext = createContext()

export default function CommentContextProvider({ children }) {
  const [comments, dispatch] = useAsyncReducer(commentReducer, [])

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