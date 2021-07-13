import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import ListAdvertisement from './../../../components/advertisement/admin/ListAdvertisement'

export default function List() {
  return (
    <div>
      <div>
        <h2 className='mb-4'>Danh sách các slide quảng cáo</h2>
        <Button color='primary' className='mb-4 btn' outline>
          <Link to='/admin/advertisement/create'>Thêm quảng cáo</Link>
        </Button>
        <ListAdvertisement />
      </div>
    </div>
  )
}
