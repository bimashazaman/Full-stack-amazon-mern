import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'

function HomeScreen() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <div className='row center'>
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  )
}

export default HomeScreen
