import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart, changeQuantity } from '../app/Cart';
import toast from 'react-hot-toast';
import { getProductById } from '../api/axios';

function CartItem(props) {
  const { productId, quantity } = props.data;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch(); 

  useEffect(() => {
    getProductById(productId)
    .then(res => setProduct(res.data))
    .catch(err => console.log("Cart Item Err: ", err))
  }, [productId])

  if (!product) {
    return <p className='text-gray-300'>Loading product...</p>
  }

  // const minusQuantity = () => {
  //     dispatch(changeQuantity({
  //       productId: productId,
  //       quantity: quantity - 1,
  //     }))
  // }

  const minusQuantity = () => {
    if (quantity === 1) {
      dispatch(changeQuantity({
        productId: productId,
        quantity: 0,
      }));
      toast.error("Removed from Cart");
    } else {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      }));
    }
  }

  const plusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1,
    }))
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(productId));
    toast.error("Removed from Cart");
  }

  return (
    <div className="flex items-center justify-between border-b border-gray-500 py-3">
      {/* Product Image */}
      <img src={product.images?.[0]} alt={product.title} className="w-16 h-16 object-contain bg-white rounded-xl shadow-2xl" />

      {/* Product Details */}
      <div className="flex-1 mx-4">
        <h3 className="text-sm font-semibold">{product.title}</h3>
        <p className="text-gray-400">${(product.price * quantity)}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={minusQuantity}
            className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            -
          </button>
          <span className="px-3 py-1 bg-white border rounded text-sm">{quantity}</span>
          <button
            onClick={plusQuantity}
            className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        // onClick={() => dispatch(removeFromCart(productId))}
        onClick={handleRemoveFromCart}
        className="text-red-500 text-lg hover:text-red-700 transition cursor-pointer">
        ❌
      </button>
    </div>
  )
}

export default CartItem