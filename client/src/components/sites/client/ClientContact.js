import React, {useEffect} from 'react'

export default function ClientContact({ title }) {

    useEffect(() =>{
        document.title = title
    })

  return (
    <div>
      <h2>this is contact client</h2>
      <h2>this is contact client</h2>
      <h2>this is contact client</h2>
      <h2>this is contact client</h2>
      <h2>this is contact client</h2>
    </div>
  )
}
