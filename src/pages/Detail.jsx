import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/Cart';
import toast from 'react-hot-toast';
import { getProductById } from '../api/axios';

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then(res => setProduct(res.data))
      .catch(err => console.log("Error Product Detail: ", err))
      .finally(() => setLoading(false))
  }, [id])

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  const handleIncrease = () => {
    setQuantity(prev => prev + 1)
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: product.id,
      price: product.price,
      quantity: quantity,
    }));
    toast.success('Added to Cart Successfully!');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {product && (
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-8">
          {/* Left Section - Image & Reviews */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-80 h-80 object-contain rounded-md mb-4"
            />

            {/* <div className="w-full bg-gray-100 p-4 rounded-md text-center">
              <p className="text-lg font-semibold">⭐ {product.rating?.rate} / 5</p>
              <p className="text-gray-600 text-sm">({product.rating?.count} reviews)</p>
            </div> */}
          </div>

          {/* Right Section - Product Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-green-600">${product.price}</span>

              <div className="px-3 py-1 rounded-md text-sm text-center">
                <p className="font-semibold text-gray-800">⭐ {product.rating} / 5</p>
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-2">{product.title}</h2>
            {/* <p className="text-gray-600 mb-4">{product.description}</p> */}

            {/* Quantity Controls */}
            <div className="mt-4 flex items-center space-x-4">
              <button
                onClick={handleDecrease}
                className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 transition duration-100"
              >
                -
              </button>
              <span className="text-lg font-semibold">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 transition duration-100"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md cursor-pointer hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <p className="text-gray-600 my-4">{product.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail