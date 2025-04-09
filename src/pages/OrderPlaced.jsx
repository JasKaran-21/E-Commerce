import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react'; // Optional: nice success icon

const OrderPlaced = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">Thank you for your purchase. We’ll send you an update when your order ships.</p>

        <Link
          to="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-xl transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderPlaced;
