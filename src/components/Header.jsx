import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from './Search';
import { setSearchQuery } from '../app/SearchSlice';
import icon from '../assets/icon.png';
import { Menu, X } from 'lucide-react';
import { toggleStatusTab } from '../app/Cart';

function Header() {
  const dispatch = useDispatch();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity)
    setTotalQuantity(total);
  }, [carts])

  // const handleOpenTabCart = () => {
  //   dispatch(toggleStatusTab());
  // }

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(setSearchQuery(value));
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className='sticky top-0 left-0 w-full backdrop-blur-sm z-50 shadow-md'>
      <div className='flex items-center justify-between px-4 lg:px-10 py-2'>

        {/* Mobile Hamburger Icon (left-most on mobile only) */}
        <div className="lg:hidden order-1">
          <button onClick={toggleMobileMenu} className="text-black p-2 focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Logo (first on desktop) */}
        <Link to="/" className='order-2 lg:order-1 w-16 flex justify-center'>
          <img src={icon} alt="logo" className='w-full invert' />
        </Link>

        {/* Nav Links (second on desktop) */}
        <div className='hidden lg:flex gap-5 order-2 lg:order-2 ml-6'>
          <Link to="/" className='text-xl font-semibold hover:text-gray-300 hover:bg-gray-900 py-1.5 px-3 rounded-full duration-200'>Home</Link>
          <Link to="/products" className='text-xl font-semibold hover:text-gray-300 hover:bg-gray-900 py-1.5 px-3 rounded-full duration-200'>Products</Link>
          <Link to="/about" className='text-xl font-semibold hover:text-gray-300 hover:bg-gray-900 py-1.5 px-3 rounded-full duration-200'>About</Link>
          <Link to="/contact" className='text-xl font-semibold hover:text-gray-300 hover:bg-gray-900 py-1.5 px-3 rounded-full duration-200'>Contact Us</Link>
        </div>

        {/* SearchBar (third on desktop) */}
        <div className="hidden lg:block flex-1 order-3 lg:order-3 mx-8">
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
        </div>

        {/* Cart Icon (last on desktop) */}
        <Link to="/cart" className='relative order-3 lg:order-4'>
          <div
            className='flex items-center justify-center w-12 h-12 bg-white rounded-2xl cursor-pointer hover:bg-gray-50'
            // onClick={handleOpenTabCart}
          >
            <img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="cart" className='w-6' />
            <span className='absolute bottom-0 left-0 bg-red-600 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>
              {totalQuantity}
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile dropdown remains unchanged */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 py-4 pb-4 pt-2 flex flex-col gap-4 rounded-b-xl shadow-md">
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/products" onClick={toggleMobileMenu}>Products</Link>
          <Link to="/about" onClick={toggleMobileMenu}>About</Link>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact Us</Link>
        </div>
      </div>
    </header>

  )
}

export default Header
