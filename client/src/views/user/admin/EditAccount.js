import React, { useEffect } from 'react'

import EditAccountForm from '../../../components/user/admin/EditAccountForm'

export default function EditAccount({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Cập nhật tài khoản</h2>
        <EditAccountForm />
      </div>
    </div>
  )
}
