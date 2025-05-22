// import React from 'react'
// import ShoppingCart from '../components/ShoppingCart'

// function ShoppingCart() {
//     return (
//         <div>
//             <ShoppingCart />
//         </div>
//     )
// }

// export default ShoppingCart



import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function ShoppingCart() {
  const navigate = useNavigate();
  const carts = useSelector(store => store.cart.items);
  const [deliveryFee, setDeliveryFee] = useState(4.99);

  const subtotal = carts.reduce((total, item) => total + (item.price * item.quantity || 0), 0);
  const tax = subtotal * 0.1; // 10% tax

  useEffect(() => {
    if (carts.length === 0) {
      setDeliveryFee(0);
    }
  }, [])

  const totalPrice = subtotal + tax + deliveryFee

  const handleCheckout = () => {
    if (carts.length > 0) {
      navigate("/home/checkout");
    } else {
      toast.error("Cart is Empty!")
    };
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {carts.length > 0 ? (
              carts.map((item, index) => <CartItem key={index} data={item} />
            )
            ) : (
              <p className="text-gray-600 text-lg text-center py-20">🛒Your cart is empty.</p>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

            <div className="text-gray-700 text-md space-y-3">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4 border-t pt-4">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-4">Estimated delivery: 3-5 business days</p>

            <button className="w-full mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded shadow"
              onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
