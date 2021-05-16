import React, {useEffect} from 'react'

export default function ClientAbout({ title }) {

    useEffect(() =>{
        document.title = title
    })

  return (
    <div>
      <h2>this is home client</h2>
      <h2>this is home client</h2>
      <h2>this is home client</h2>
      <h2>this is home client</h2>
      <h2>this is home client</h2>
    </div>
  )
}
