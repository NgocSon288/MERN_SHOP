import React, { useEffect } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import DetailOrder from '../../../components/order/admin/DetailOrder'

export default function Detail() {
  return <div>
      <h2>Chi tiết hoá đơn</h2>
      <DetailOrder/>
  </div>
}
