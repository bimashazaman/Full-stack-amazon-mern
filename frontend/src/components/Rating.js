import React from 'react'

function Rating(props) {
  const { rating, numReviews } = props
  return (
    <div className='rating'>
      <i
        className={
          rating >= 1
            ? 'fas fa-star'
            : rating >= 1.5
            ? 'fa fa-star-half-o'
            : 'fa fa-star-o'
        }
      ></i>
      <i
        className={
          rating >= 2
            ? 'fas fa-star'
            : rating >= 2.5
            ? 'fa fa-star-half-o'
            : 'fa fa-star-o'
        }
      ></i>
      <i
        className={
          rating >= 3
            ? 'fas fa-star'
            : rating >= 3.5
            ? 'fa fa-star-half-o'
            : 'fa fa-star-o'
        }
      ></i>
      <i
        className={
          rating >= 4
            ? 'fas fa-star'
            : rating >= 4.5
            ? 'fa fa-star-half-o'
            : 'fa fa-star-o'
        }
      ></i>
      <i
        className={
          rating >= 5
            ? 'fas fa-star'
            : rating >= 5
            ? 'fa fa-star-half-o'
            : 'fa fa-star-o'
        }
      ></i>

      <span>{numReviews + ' reviews'}</span>
    </div>
  )
}

export default Rating
