import './App.css'
import React from 'react'

function App() {
  return (
    <div>
      <div className='grid-container'>
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
        <main>
          <div className='row center'>
            <div className='card'>
              <a href='product.html'>
                <img
                  className='medium'
                  src='images/product.jpg'
                  alt='product'
                />
              </a>
              <div className='card-body'>
                <h3>
                  <a href='product.html'>Product Name</a>
                </h3>
                <div className='rating'>
                  <span>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='far fa-star'></i>
                  </span>
                </div>

                <div className='price'>
                  $<span>9.99</span>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className='row center'>All rights reserved.</footer>
      </div>
    </div>
  )
}

export default App
