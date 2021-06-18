import React, { useEffect } from 'react' 

// import ListOrder from '../../../components/order/admin/ListOrder'

export default function List({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Danh sách các sản phẩm</h2>
        {/* <Button color='primary' className='mb-4 btn' outline>
          <Link to='/admin/order/create'>Thêm hoá đơn</Link>
        </Button> */}

        <h2> hello</h2>
        {/* <ListOrder /> */}

        {/* <Card></Card> */}

        {/* <Info></Info> */}

        

      </div>
    </div>
  )
}
