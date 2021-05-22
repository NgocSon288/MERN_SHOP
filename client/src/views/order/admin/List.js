import React, { useEffect } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import ListOrder from '../../../components/order/admin/ListOrder'

export default function List({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Danh sách các hoá đơn</h2>
        {/* <Button color='primary' className='mb-4 btn' outline>
          <Link to='/admin/order/create'>Thêm hoá đơn</Link>
        </Button> */}
        <ListOrder />
      </div>
    </div>
  )
}
