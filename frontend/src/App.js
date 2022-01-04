import './App.css'
import React from 'react'
import data from './data.js'
import Product from './components/Product'

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
            {data.products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </main>
        <footer className='row center'>All rights reserved.</footer>
      </div>
    </div>
  )
}

export default App
