import React from 'react'
import '../App.css'
import Rating from './Rating'

function Product(props) {
  const product = props.product
  const productId = props.product._id

  return (
    <div key={productId} className='card'>
      <a href={`/product/${productId}`}>
        <img className='medium' src={product.image} alt={product.name} />
      </a>
      <div className='card-body'>
        <h3>
          <a href={`/product/${productId}`}>{product.name}</a>
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
