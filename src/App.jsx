import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AllProducts from './pages/AllProducts'
import About from './pages/About'
import Contact from './pages/Contact'
import ShoppingCart from './pages/ShoppingCart'
import Signup from './pages/Signup'
import Checkout from './pages/Checkout'
import OrderPlaced from './pages/OrderPlaced'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <ScrollToTop /> {/* place in router */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path='/product/:id' element={<Detail />} />
            <Route path='/cart' element={<ShoppingCart />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-placed" element={<OrderPlaced />} />

            {/* <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
