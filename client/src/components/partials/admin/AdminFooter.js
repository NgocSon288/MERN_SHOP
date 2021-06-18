import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import './AdminFooter.css'

export default function AdminFooter() {
    return (
      <div>
        <div className='copyrights'>
          <p className='copyrights'>
            © 2016 Shoppy. All Rights Reserved | Design by{' '}
            <span>W3layouts</span>{' '}
          </p>
        </div>
      </div>
    )
}
