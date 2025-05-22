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
                    <Link to="/home" className="hover:text-white transition hover:shadow-lg transform hover:-translate-y-1 duration-300 ease-in-out text-center hover:underline">Home</Link>
                    <Link to="/home/cart" className="hover:text-white transition hover:shadow-lg transform hover:-translate-y-1 duration-300 ease-in-out text-center hover:underline">Cart</Link>
                    <Link to="/home/about" className="hover:text-white transition hover:shadow-lg transform hover:-translate-y-1 duration-300 ease-in-out text-center hover:underline">About</Link>
                    <Link to="/home/contact" className="hover:text-white transition hover:shadow-lg transform hover:-translate-y-1 duration-300 ease-in-out text-center hover:underline">Contact</Link>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} CartCraze. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
