import React, { useEffect } from 'react'

import ClientHome from './../../../components/sites/client/ClientHome'

export default function Home({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      {/* Phân tách ra thành nhiều components khác nhau, như các components về sản phẩm nỗi bật, bán chạy, sản phẩm mới */}
      {/* ClientHome là một component để cho có views, để test */}
      <ClientHome />
    </div>
  )
}
