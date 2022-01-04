import React from 'react'
import '../App.css'
import Rating from './Rating'

function Product(props) {
  const { product } = props
  return (
    <div key={product._id} className='card'>
      <a href={`/product/${product._id}`}>
        <img className='medium' src={product.image} alt={product.name} />
      </a>
      <div className='card-body'>
        <h3>
          <a href={`/product/${product._id}`}>{product.name}</a>
        </h3>
        <Rating rating={product.rating} numReviews={product.numReviews} />

        <div className='price'>
          $<span>{product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default Product
