import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './Header'
import CartTab from './CartTab'
import Footer from './Footer'

function Layout() {
  // const statusTabCart = useSelector(store => store.cart.statusTab)

  return (
    <div className='bg-gray-100'>
      <main className={`w-[1400px] max-w-full mx-auto transform transition-transform duration-500`}>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}

export default Layout