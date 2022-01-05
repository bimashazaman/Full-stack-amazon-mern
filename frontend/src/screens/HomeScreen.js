import React from 'react'
import data from '../data.js'
import Product from '../components/Product'

function HomeScreen() {
  const products = data.products

  return (
    <div className='row center'>
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  )
}

export default HomeScreen
