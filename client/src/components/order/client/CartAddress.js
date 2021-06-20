import {Link} from 'react-router-dom'

import './CartAddress.css' 

export default function CartAddress() { 
    return (
      <div className="container">
        <ol className='dia-chi'>
          <li>
            <Link to='/'>Trang chủ</Link>
          </li>
          <li className='active'>Giỏ hàng</li> 
        </ol>
      </div>
    )
}
