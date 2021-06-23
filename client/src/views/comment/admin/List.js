import React, { useEffect } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import ListComment from '../../../components/comment/admin/ListComment'

export default function List({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Danh sách các đánh giá</h2>
        {/* <Button color='primary' className='mb-4 btn' outline>
          <Link to='/admin/comment/create'>Thêm đánh giá (chỉ dùng để test admin)</Link>
        </Button> */}
        <ListComment />
      </div>
    </div>
  )
}
