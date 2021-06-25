import React, { useEffect } from 'react'

import ClientAbout from "../../../components/sites/client/ClientAbout"

export default function About({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <ClientAbout></ClientAbout>
  )
}