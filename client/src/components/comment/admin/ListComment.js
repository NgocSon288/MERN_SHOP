import React, { useEffect, useContext } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

import { CommentContext } from './../../../contexts/admin/CommentContext'
import * as COMMENT_TYPE from './../../../reducers/admin/commentType.js'

export default function ListComment() {
  let { comments, dispatch } = useContext(CommentContext)

  useEffect(() => {
      console.log(comments);
  }, [comments])

  const removeItem = async ({ _id }) => { 
    const check = window.confirm('Are you sure you want to remove')

    if (check) {
      dispatch({
        type: COMMENT_TYPE.DELETE_BY_ID,
        payload: { _id },
      })
    }
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Lý do</th>
          <th>Mô tả</th>
          <th>Số sao</th>
          <th>Tác giả</th>
          <th>Sản phẩm</th>
          <th>Ngày tạo</th>
          <th>Modified</th>
        </tr>
      </thead>
      <tbody>
        {comments &&
          comments.map((item, i) => (
            <tr key={i}>
              <th scope='row'>{i + 1}</th>
              <td>{item.reason}</td>
              <td>{item.description}</td>
              <td>{item.starNumber}</td>
              <td>{item.user.name}</td>
              <td>{item.product.name}</td>
              <td>{item.createdAt}</td>
              <td>
                <button className='btn btn-info'>
                  <Link to={'/admin/comment/' + item._id}>Chi tiết</Link>
                </button>
                <button
                  className='btn btn-danger ml-2'
                  onClick={() => removeItem(item)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}
