import React from 'react'
import data from '../data'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function ProductScreen(props) {
  const { id } = useParams()
  const product = data.products.find((product) => product.id === 1)

  // const productId = props.match.params.id
  // const product = data.products.find((p) => p._id === productId)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <Link to='/'> Back to result</Link>
      <div className='row top'>
        <div className='col-2'>
          <img src={product.image} alt={product.name} />
        </div>

        <div className='col-1'>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>

            <li>
              <b>PRICE : ${product.price}</b>
            </li>
            <li>
              <p> {product.description}</p>
            </li>
          </ul>
        </div>

        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <div className='row'>
                  <div>price</div>
                  <div className='price'>${product.price}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>
                    {/* HOW MANY IN STOCK */}
                    {product.countInStock.toString() + ' Availabe'}
                  </div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className='succsess'>In Stock</span>
                    ) : (
                      <span className='error'>Out of Stock</span>
                    )}
                  </div>
                </div>
              </li>

              <li>
                <button className='primary block'>
                  {product.countInStock > 0 ? 'Add to cart' : 'Out of Stock'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
