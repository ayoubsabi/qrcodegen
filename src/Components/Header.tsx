import React from 'react'

function Header(): JSX.Element {
  return (
    <header className='header text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center py-3'>
          <div className='qr-logo'>
            <h1 className='h5 mb-0 fw-light'>
              <span className='fw-bolder'>QR</span> CODE GENERATOR
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
