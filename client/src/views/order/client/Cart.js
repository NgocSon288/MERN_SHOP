import React, { useEffect } from 'react' 

import Cart from './../../../components/order/client/Cart'

export default function List({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        
        <Cart></Cart>

        

      </div>
    </div>
  )
}
