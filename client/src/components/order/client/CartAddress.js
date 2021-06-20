import './CartAddress.css' 

export default function CartAddress() { 
    return (
      <div className="container">
        <ol className='dia-chi'>
          <li>
            <a href='index.html'>Trang chủ</a>
          </li>
          <li className='active'>Giỏ hàng</li> 
        </ol>
      </div>
    )
}
