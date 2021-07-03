import React, { useEffect } from 'react'

import ProfileClient from './../../../components/user/client/Profile'

export default function Profile({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <ProfileClient></ProfileClient>
    </div>
  )
}
