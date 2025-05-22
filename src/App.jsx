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
import ProductCategory from './pages/ProductCategory'

function App() {

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <ScrollToTop /> {/* place in router */}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<Home />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="products/:id" element={<Detail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-placed" element={<OrderPlaced />} />
            <Route path="category/:slug" element={<ProductCategory />} />
          </Route>
          <Route path="*" element={<h2 className="text-center mt-10 text-red-500">404 - Page Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
