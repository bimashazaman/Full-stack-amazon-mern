import React from 'react'
import '../App.css'

function Header() {
  return (
    <div>
      <header className='row'>
        <div>
          <a href='index.html' className='brand'>
            Amazon
          </a>
        </div>

        <div>
          <a href='cart.html'>Cart</a>
          <a href='signin.html'>sign In</a>
        </div>
      </header>
    </div>
  )
}

export default Header
