import React, { useEffect, useContext, useState } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import Pagination from 'react-js-pagination'

import { CommentContext } from './../../../contexts/admin/CommentContext'
import * as COMMENT_TYPE from './../../../reducers/admin/commentType.js'

export default function ListComment() {
  let { comments, dispatch } = useContext(CommentContext)

  // Params pagination
  let [activePage, setActivePage] = useState(1)
  let [totalItemsCount, setTotalItemsCount] = useState(1)
  let [commentsActivePage, setCommentsActivePage] = useState([])
  let itemsCountPerPage = 3

  useEffect(() => {
    if (comments && comments.length > 0) {
      // filter pagination
      setTotalItemsCount(comments.length)
      let index = (activePage - 1) * itemsCountPerPage
      setCommentsActivePage([
        ...comments.slice(index, index + itemsCountPerPage),
      ])
    }
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

  // function pagination
  const handlePageChange = (pageNumber) => {
    let index = (pageNumber - 1) * itemsCountPerPage
    setCommentsActivePage([...comments.slice(index, index + itemsCountPerPage)])
    setActivePage(pageNumber)
  }
  const convertDatetime = (date) => {
    date = new Date(date)
    let da = date.getDate()
    let mo = date.getMonth() + 1
    let ye = date.getFullYear()

    return `${da}/${mo}/${ye}`
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Lý do</th>
            <th>Mô tả</th>
            <th>Số sao</th>
            {/* <th>Tác giả</th> */}
            <th>Sản phẩm</th>
            <th>Ngày tạo</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {commentsActivePage &&
            commentsActivePage.map((item, i) => (
              <tr key={i}>
                <th scope='row'>
                  {(activePage - 1) * itemsCountPerPage + i + 1}
                </th>
                <td>{item.reason}</td>
                <td>{item.description}</td>
                <td>{item.starNumber}</td>
                {/* <td>{item.user.name}</td> */}
                <td>{item.product.name}</td>
                <td>{convertDatetime(item.createdAt)}</td>
                <td>
                  <button className='btn btn-info'>
                    <Link to={'/admin/comment/' + item._id}>Chi tiết</Link>
                  </button>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => removeItem(item)}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className='my-pagination'>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )
}
