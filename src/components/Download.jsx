import React from 'react'
import { Button } from 'react-bootstrap'

const Download = () => {
  return (
    <div className='ml-5 md:ml-20'>
        <a href="/Harsha_Resume.pdf" download="Harsha_Resume">
     <Button>Download Resume</Button>
        </a>
    </div>
  )
}

export default Download