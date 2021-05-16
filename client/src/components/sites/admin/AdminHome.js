import React, { useEffect, useState } from 'react'
import categoryService from '../../../services/categoryService' 

export default function AdminHome({ title }) {
  useEffect(() => {
    document.title = title
 
  })    
 
  return (
    <div>
      <h1>this is home</h1>
      <h1>this is home</h1>
      <h1>this is home</h1>
      <h1>this is home</h1>
      <h1>this is home</h1>
    </div>
  )
}
