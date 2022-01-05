import './App.css'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Header from './components/Header'
// import Product from './components/Product'
// import data from './data'

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='grid-container'>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<HomeScreen />}></Route>

              <Route
                path='/product/:id'
                element={<ProductScreen />}
                exact
              ></Route>
            </Routes>
          </main>
          <footer className='row center'>All rights reserved.</footer>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
