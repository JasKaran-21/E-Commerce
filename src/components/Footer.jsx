import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/icon.png'

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo / Brand */}
                <div className="mb-4 md:mb-0">
                    <div className="flex items-center space-x-2">
                        <img src={icon} alt="CartCraze Logo" className="w-20 object-contain" />
                        <h2 className="text-xl font-bold text-white">CartCraze</h2>
                    </div>
                    <p className="text-sm text-gray-400">Your one-stop e-commerce destination</p>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link to="/" className="hover:text-white transition hover:underline duration-300">Home</Link>
                    <Link to="/cart" className="hover:text-white transition hover:underline duration-300">Cart</Link>
                    <Link to="/about" className="hover:text-white transition hover:underline duration-300">About</Link>
                    <Link to="/contact" className="hover:text-white transition hover:underline duration-300">Contact</Link>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} CartCraze. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
